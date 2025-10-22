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
import {
  useForm,
  Controller,
  type SubmitHandler,
  type Resolver,
} from "react-hook-form";
import categoriesService from "@/services/categoriesServices";
import productsService from "@/services/productsServices";
import type { Product, category as CategoryType } from "@/types";
import { Switch } from "@/components/ui/switch";
import { productDefaultValues } from "@/lib/constants";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/validators/productValidators";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Toaster } from "sonner";

type FormState = z.infer<typeof productSchema>;

const ProductFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState<Array<CategoryType>>([]);
  // const [loading, setLoading] = useState(false);
  const [hasBanner, setHasBanner] = useState<boolean | null>(null);
  const [isActive, setIsActive] = useState<boolean | null>(true);

  // Form setup
  const form = useForm<FormState>({
    resolver: zodResolver(productSchema) as Resolver<FormState>,
    defaultValues: productDefaultValues,
  });

  const { register, handleSubmit, control, reset, formState } = form;

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

          {/* Here will be an upload Field */}
          <div className="w-full">
            <Label htmlFor="images">Images (comma separated URLs)</Label>
            <Controller
              control={control}
              name="images"
              render={({ field }) => (
                <Input
                  id="images"
                  className="w-full"
                  value={(field.value || []).join(", ")}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean)
                    )
                  }
                />
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

          <div>
            <Label htmlFor="isActive">Product is active</Label>
            <Switch checked={!!isActive} onCheckedChange={setIsActive} />
          </div>

          <div>
            <Label htmlFor="hasBanner">Has Banner?</Label>
            <Switch checked={!!hasBanner} onCheckedChange={setHasBanner} />
          </div>

          {/* Here will be an upload Field */}
          <Activity mode={hasBanner ? "visible" : "hidden"}>
            <FormField
              control={form.control}
              name="banner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banner</FormLabel>
                  <FormControl>
                    <Input placeholder="Banner" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Activity>

          <div className="flex items-center gap-3">
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
