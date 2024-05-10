import { Label } from "@/src/components/ui/label";
import { type TSendEmail, sendEmail } from "@/src/schema/send-emails";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Div } from "../../templates";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
export const NewsLetter = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TSendEmail>({
		defaultValues: {
			email: "",
		},
		resolver: zodResolver(sendEmail),
	});

	const onSubmit: SubmitHandler<TSendEmail> = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`flex flex-col items-center justify-center`}
		>
			<Label htmlFor={"UserEmail"} className={`sr-only`}>
				Email address
			</Label>
			<Div className="flex flex-row items-center justify-center ">
				<Input
					id={"UserEmail"}
					placeholder={`Email address`}
					{...register("email")}
					type={`email`}
					className={` rounded-r-none w-36`}
				/>
				<Button type={`submit`} className={`rounded-l-none`}>
					Subscribe
				</Button>
			</Div>
			{errors.email && <p className={``}>{errors.email.message}</p>}
		</form>
	);
};
