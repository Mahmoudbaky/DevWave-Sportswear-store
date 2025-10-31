import z from "zod";

export const signUpSchema = z.object({
  userName: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const updateUserProfileValidationSchema = z.object({
  email: z.string().email(),
  userName: z.string().min(2).max(100),
  userImage: z.string().min(2).max(500).optional(),
});
