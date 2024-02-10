import { z } from "zod";
import { EmailRegex } from "@/src/constants";
export const sendEmail = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address"
    }).regex(EmailRegex).min(5).max(255),
  }).required()

export type TSendEmail = z.infer<typeof sendEmail>;
