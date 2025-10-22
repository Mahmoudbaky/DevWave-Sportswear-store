import z from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(1, "Price is required"),
  category: z.string().min(1, "Category is required"),
  stock: z.coerce.number().min(1, "Stock is required"),
  images: z.array(z.string().url("Each image must be a valid URL")),
  banner: z
    .string()
    .url("Banner must be a valid URL")
    .or(z.literal(""))
    .optional(),
  discount: z.coerce.number().optional(),
  isActive: z.boolean().optional(),
});
