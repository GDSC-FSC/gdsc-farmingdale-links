import { z } from "zod";
// import { EmailRegex } from "@/src/constants";

export const signUpSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(10, {
      message: "Please enter a password of at least 10 characters",
    }),
    confirmPassword: z.string(),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
}).required();

export const resetSchema = z.object({
    password: z.string().min(10, {
      message: "Please enter a password of at least 10 characters",
    }),
    confirmPassword: z.string(),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const forgotSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  }).regex(/^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/).min(5).max(255)
}).required()

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TSignInSchema = z.infer<typeof signInSchema>;
export type TResetSchema = z.infer<typeof resetSchema>;
export type TForgotSchema = z.infer<typeof forgotSchema>;
