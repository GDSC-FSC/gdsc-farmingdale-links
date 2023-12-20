import { z } from "zod";

export const sendEmail = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
  })

export type TSendEmail = z.infer<typeof sendEmail>;