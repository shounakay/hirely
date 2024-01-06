import { z } from "zod";

export const signUpFormSchema = z
  .object({
    email: z.string().email("Please enter a valid Email"),
    password: z.string().min(5, "Has to be atleast 5 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const signInFormSchema = z.object({
  username: z.string().min(12),
  password: z.string(),
});

export type TSignInFormSchema = z.infer<typeof signInFormSchema>;

export type TSignUpFormSchema = z.infer<typeof signUpFormSchema>;

export type JobLevel =
  | "Entry Level"
  | "Senior Level"
  | "Mid Level"
  | "Director";
