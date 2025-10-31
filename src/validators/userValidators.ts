import z from "zod";

export const updateUserProfileValidationSchema = z.object({
  email: z.string().email(),
  userName: z.string().min(2).max(100),
  userImage: z.string().min(2).max(500).optional(),
});
