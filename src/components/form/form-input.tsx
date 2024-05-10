import { forwardRef } from "react";
import { useFormState } from "react-hook-form";

import { Div } from "@/src/components/templates/index";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { cn } from "@/src/lib/utils";
import { FormErrors } from "./form-errors";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
	(
		{
			id,
			label,
			type,
			placeholder,
			required,
			disabled,
			errors,
			className,
			defaultValue = "",
			onBlur,
		},
		ref,
	) => {
		const { isLoading } = useFormState();

		return (
			<Div className="space-y-2">
				<Div className="space-y-1">
					{label ? (
						<Label
							htmlFor={id}
							className="text-xs font-semibold text-neutral-700"
						>
							{label}
						</Label>
					) : null}
					<Input
						onBlur={onBlur}
						defaultValue={defaultValue}
						ref={ref}
						required={required}
						name={id}
						id={id}
						placeholder={placeholder}
						type={type}
						disabled={isLoading || disabled}
						className={cn("text-sm px-2 py-1 h-7", className)}
						aria-describedby={`${id}-error`}
					/>
				</Div>
				<FormErrors id={id} errors={errors} />
			</Div>
		);
	},
);

FormInput.displayName = "FormInput";
