import { useCurrentUser } from "@/src/core/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import ContactContainer from "../components/custom/core/ContactContainer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { appEmail, appName } from "../constants/app";
import { usePageEffect } from "../core/page";
import { type ContactForm, contactFormSchema } from "../schema/contact";
interface ContactFormProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}
export const Component: React.FC = function Contact() {
	usePageEffect({ title: `Contact | ${appName}` });
	const onSubmit: SubmitHandler<ContactFormProps> = (formData) => {
		window.location.href = `mailto:${appEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
	};
	const [charactersLeft, setCharactersLeft] = useState(500);
	const form = useForm<ContactForm>({
		resolver: zodResolver(contactFormSchema),
	});
	const handleTextareaChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const currentLength = event.target.value.length;
		const remaining = 1000 - currentLength;
		setCharactersLeft(remaining);
	};
	const user = useCurrentUser();
	return (
		<>
			<ContactContainer
				cardContent={
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="mt-10 flex flex-col mx-auto space-y-8 select-none "
					>
						<div className="flex space-x-2">
							<Input
								{...form.register("name")}
								placeholder="Name"
								className="input-style"
								type="text"
								required
								maxLength={255}
								defaultValue={user?.displayName || ""}
							/>
							<Input
								{...form.register("email")}
								placeholder="Email"
								className="input-style"
								type="email"
								required
								maxLength={255}
								defaultValue={user?.email || ""}
							/>
						</div>
						<Input
							{...form.register("subject")}
							placeholder="Subject"
							className="input-style"
							type="text"
							required
							maxLength={255}
						/>
						<Textarea
							autoCapitalize="sentences"
							autoCorrect="on"
							spellCheck="true"
							{...form.register("message")}
							placeholder="Message"
							maxLength={1000}
							required
							onChange={handleTextareaChange}
							className="input-style max-h-[500px] min-h-[100px]"
						/>
						<p className="text-sm text-gray-500">
							Characters left: {charactersLeft}
						</p>
						<Button type="submit" className="submit-button w-full">
							Submit
						</Button>
					</form>
				}
			/>
		</>
	);
};
