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
import { useForm, Controller } from "react-hook-form";
import categoriesService from "@/services/categoriesServices";
import productsService from "@/services/productsServices";
import type { Product, category as CategoryType } from "@/types";
import { Toaster } from "sonner";
import { Switch } from "@/components/ui/switch";

type FormState = {
  name: string;
  brand: string;
  description?: string;
  price: number | "";
  category: string;
  stock: number | "";
  images: string[];
  banner?: string;
  deliveryDate?: string;
  discount?: number | "";
  saleRate?: number | "";
};

const ProductFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState<Array<CategoryType>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasBanner, setHasBanner] = useState<boolean | null>(null);

  // react-hook-form
  const { register, handleSubmit, control, reset, formState } =
    useForm<FormState>({
      defaultValues: {
        name: "",
        brand: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        images: [],
        banner: undefined,
        discount: 0,
        deliveryDate: "",
        saleRate: "",
      },
    });

  const { errors } = formState;

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

    setLoading(true);
    productsService
      .getProduct(id)
      .then((res) => {
        const p = res.data as Product;
        // reset form values with fetched product
        reset({
          name: p.name,
          brand: p.brand ?? "",
          description: p.description ?? "",
          price: p.price,
          category: String(p.category?._id ?? ""),
          stock: p.stock ?? 0,
          images: p.images ?? [],
          banner: p.banner ?? "",
          deliveryDate: p.deliveryDate ?? "",
          discount: p.discount ?? "",
          saleRate: p.saleRate ?? "",
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [id, reset]);

  const onSubmit = async (values: FormState) => {
    setError(null);

    // basic validation enforced by react-hook-form rules too
    setLoading(true);
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
        deliveryDate: values.deliveryDate,
        discount: values.discount ? Number(values.discount) : undefined,
        saleRate: values.saleRate ? Number(values.saleRate) : undefined,
      } as any;

      if (id) {
        await productsService.updateProduct(id, payload);
      } else {
        await productsService.createProduct(payload);
      }

      navigate("/admin/products");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ?? err?.message ?? "Failed to save product"
      );
    } finally {
      setLoading(false);
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {error && <div className="text-destructive">{error}</div>}

        <div className="w-full">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            className="w-full"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-destructive text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="w-full">
          <Label htmlFor="brand">Brand</Label>
          <Input
            id="brand"
            className="w-full"
            {...register("brand", { required: "Brand is required" })}
          />
          {errors.brand && (
            <p className="text-destructive text-sm">{errors.brand.message}</p>
          )}
        </div>

        <div className="w-full">
          <Label htmlFor="description">Description</Label>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <textarea
                id="description"
                className="w-full rounded-md border px-3 py-2"
                {...field}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
            />
            {errors.price && (
              <p className="text-destructive text-sm">{errors.price.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              type="number"
              {...register("stock", { valueAsNumber: true })}
            />
          </div>
        </div>

        <div className="w-full">
          <Label>Category</Label>
          <Controller
            control={control}
            name="category"
            rules={{ required: "Category is required" }}
            render={({ field }) => (
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
            )}
          />
          {errors.category && (
            <p className="text-destructive text-sm">
              {errors.category.message}
            </p>
          )}
        </div>

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
          <Label htmlFor="discount">Discount (%)</Label>
          <Input
            id="discount"
            type="number"
            className="w-full"
            {...register("discount", { valueAsNumber: true })}
          />
          {errors.discount && (
            <p className="text-destructive text-sm">
              {errors.discount.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="hasBanner">Has Banner?</Label>
          <Switch checked={!!hasBanner} onCheckedChange={setHasBanner} />
        </div>

        <Activity mode={hasBanner ? "visible" : "hidden"}>
          <div>
            <Label htmlFor="banner">Banner URL</Label>
            <Input id="banner" {...register("banner")} />
          </div>
        </Activity>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : id ? "Update Product" : "Create Product"}
          </Button>
          <Button variant="ghost" onClick={() => navigate(-1)} type="button">
            Back
          </Button>
        </div>
      </form>
    </main>
  );
};

export default ProductFormPage;
