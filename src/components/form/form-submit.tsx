import { useFormState } from "react-hook-form";

import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export const FormSubmit = ({
	children,
	isDisabled,
	className,
	variant,
}: FormSubmitProps) => {
	const { disabled } = useFormState();
	return (
		<Button
			disabled={disabled || isDisabled}
			type="submit"
			variant={variant}
			size="sm"
			className={cn(className)}
		>
			{children}
		</Button>
	);
};
