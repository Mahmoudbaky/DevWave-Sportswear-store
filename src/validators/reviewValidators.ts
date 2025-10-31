import z from "zod";

export const reviewSchema = z.object({
  productId: z.string().min(1, "Product id is required"),
  rating: z.number().min(1, "Rating is required").max(5),
  comment: z.string().min(1, "Comment is required").max(1000),
});
