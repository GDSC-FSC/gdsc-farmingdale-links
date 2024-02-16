import { z } from "zod";
export const sendEmail = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address"
    }).regex(/^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/).min(5).max(255),
  }).required()

export type TSendEmail = z.infer<typeof sendEmail>;
