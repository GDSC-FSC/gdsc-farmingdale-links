import { z } from "zod";

export const contactFormSchema = z.object({
	name: z.string().min(3).max(255),
	email: z
		.string()
		.email({
			message: "Please enter a valid email address",
		})
		.regex(
			/^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
		)
		.min(5)
		.max(255),
	subject: z.string().min(3).max(255),
	message: z.string().min(10).max(1000),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
