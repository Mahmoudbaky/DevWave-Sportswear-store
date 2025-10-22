import { Activity, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import categoriesService from "@/services/categoriesServices";
import productsService from "@/services/productsServices";
import type { Product, category as CategoryType } from "@/types";
import { Switch } from "@/components/ui/switch";
import { productDefaultValues } from "@/lib/constants";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/validators/productValidators";
import { Textarea } from "@/components/ui/textarea";
import UploadButton from "@/components/upload/UploadButton";
import { X, Image as ImageIcon, Upload } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

// import { Toaster } from "sonner";

type FormState = z.infer<typeof productSchema>;

const ProductFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState<Array<CategoryType>>([]);
  const [hasBanner, setHasBanner] = useState<boolean | null>(null);
  const [isActive, setIsActive] = useState<boolean | null>(true);

  // Form setup
  const form = useForm<FormState>({
    resolver: zodResolver(productSchema) as Resolver<FormState>,
    defaultValues: productDefaultValues,
  });

  const { reset, formState, watch, setValue } = form;

  const currentImages = watch("images") || [];
  const currentBanner = watch("banner") || "";

  console.log("Form Errors:", formState.isLoading);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoriesService.getCategories();
        setCategories(res.data);
      } catch (error) {
        // handle error if needed
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!id) return;

    try {
      const fetchProduct = async () => {
        const res = await productsService.getProduct(id);
        const p = res.data as Product;

        console.log("Fetched Product:", p.category);
        // reset form values with fetched product
        reset({
          name: p.name,
          brand: p.brand ?? "",
          description: p.description ?? "",
          price: p.price,
          category: String(p.category ?? ""),
          stock: p.stock ?? 0,
          images: p.images ?? [],
          banner: p.banner ?? "",
          discount: p.discount ?? 0,
          isActive: p.isActive ?? true,
        });

        // Set banner state if product has banner
        if (p.banner) {
          setHasBanner(true);
        }
      };
      fetchProduct();
    } catch (error) {
      // handle error if needed
    }
  }, [id, reset]);

  const onSubmit: SubmitHandler<FormState> = async (values) => {
    console.log("////////////////////");
    // basic validation enforced by react-hook-form rules too
    try {
      const payload = {
        name: values.name,
        brand: values.brand,
        description: values.description,
        price: Number(values.price),
        category: values.category,
        stock: Number(values.stock) || 0,
        images: values.images,
        banner: values.banner,
        discount: values.discount ? Number(values.discount) : undefined,
        isActive: isActive || false,
      } as FormState;

      if (id) {
        await productsService.updateProduct(id, payload);
      } else {
        await productsService.createProduct(payload);
      }

      navigate("/admin/products");
    } catch (err: any) {
      // handle error if needed
    } finally {
      // setLoading(false);
    }
  };

  const removeImage = (indexToRemove: number) => {
    const updatedImages = currentImages.filter(
      (_, index) => index !== indexToRemove
    );
    setValue("images", updatedImages);
  };

  const removeBanner = () => {
    setValue("banner", "");
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold  dark:text-background-light">
            {id ? "Edit Product" : "Create Product"}
          </h2>
          <p className="/60 dark:text-background-light/60">
            {id
              ? "Update product details below."
              : "Create a new product by filling out the form below."}
          </p>
        </div>
        <div>
          <Button onClick={() => navigate(-1)} variant="outline" size="sm">
            Cancel
          </Button>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* {error && <div className="text-destructive">{error}</div>} */}

          <div className="w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="Brand" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Product description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Price" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input placeholder="Stock" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(v) => field.onChange(v)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c._id} value={String(c._id)}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Images Upload Section - Enhanced */}
          <div className="w-full">
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Product Images</FormLabel>
                  <FormDescription>
                    Upload multiple images to showcase your product. First image
                    will be the main display.
                  </FormDescription>
                  <FormControl>
                    <div className="space-y-4">
                      {/* Upload Area */}
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 hover:border-muted-foreground/50 transition-colors bg-muted/5">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <div className="rounded-full bg-primary/10 p-4">
                            <Upload className="h-8 w-8 text-primary" />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium mb-1">
                              Click to upload product images
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PNG, JPG, WEBP up to 10MB
                            </p>
                          </div>
                          <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                              if (res) {
                                const newUrls = res.map((file) => file.url);
                                const updatedImages = [
                                  ...currentImages,
                                  ...newUrls,
                                ];
                                setValue("images", updatedImages);
                              }
                            }}
                            onUploadError={(error: Error) => {
                              console.error("Upload error:", error);
                              alert(`Upload failed: ${error.message}`);
                            }}
                          />
                        </div>
                      </div>

                      {/* Image Gallery */}
                      {currentImages.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ImageIcon className="h-4 w-4" />
                            <span>
                              {currentImages.length} image
                              {currentImages.length !== 1 ? "s" : ""} uploaded
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {currentImages.map((url, index) => (
                              <div
                                key={index}
                                className="relative group aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors"
                              >
                                <img
                                  src={url}
                                  alt={`Product ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                {index === 0 && (
                                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                                    Main
                                  </div>
                                )}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full p-2 transform scale-95 hover:scale-100 transition-transform"
                                  >
                                    <X className="h-5 w-5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentImages.length === 0 && (
                        <div className="text-center py-8 text-sm text-muted-foreground">
                          No images uploaded yet
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter discount percentage"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center gap-3">
            <Switch
              checked={!!isActive}
              onCheckedChange={setIsActive}
              id="isActive"
            />
            <Label htmlFor="isActive" className="cursor-pointer">
              Product is active
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <Switch
              checked={!!hasBanner}
              onCheckedChange={setHasBanner}
              id="hasBanner"
            />
            <Label htmlFor="hasBanner" className="cursor-pointer">
              Has Banner?
            </Label>
          </div>

          {/* Banner Upload Section - Enhanced */}
          <Activity mode={hasBanner ? "visible" : "hidden"}>
            <FormField
              control={form.control}
              name="banner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Banner Image</FormLabel>
                  <FormDescription>
                    Upload a wide banner image for promotional display
                    (recommended: 1920x600px)
                  </FormDescription>
                  <FormControl>
                    <div className="space-y-4">
                      {!currentBanner ? (
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 hover:border-muted-foreground/50 transition-colors bg-muted/5">
                          <div className="flex flex-col items-center justify-center gap-3">
                            <div className="rounded-full bg-primary/10 p-4">
                              <ImageIcon className="h-10 w-10 text-primary" />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-medium mb-1">
                                Click to upload banner image
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Wide format recommended • PNG, JPG, WEBP up to
                                10MB
                              </p>
                            </div>
                            <UploadButton
                              endpoint="imageUploader"
                              onClientUploadComplete={(res) => {
                                if (res && res[0]) {
                                  setValue("banner", res[0].url);
                                }
                              }}
                              onUploadError={(error: Error) => {
                                console.error("Upload error:", error);
                                alert(`Upload failed: ${error.message}`);
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative group rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors">
                          <img
                            src={currentBanner}
                            alt="Banner"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                              type="button"
                              onClick={removeBanner}
                              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full p-3 transform scale-95 hover:scale-100 transition-transform"
                            >
                              <X className="h-6 w-6" />
                            </button>
                          </div>
                          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded shadow-lg">
                            Banner Image
                          </div>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Activity>

          <div className="flex items-center gap-3 pt-4">
            <Button
              className="cursor-pointer"
              type="submit"
              disabled={formState.isLoading}
            >
              {formState.isLoading
                ? "Saving..."
                : id
                ? "Update Product"
                : "Create Product"}
            </Button>
            <Button variant="ghost" onClick={() => navigate(-1)} type="button">
              Back
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default ProductFormPage;
