"use client";

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";

import { cn } from "@/src/lib/utils";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Div } from "@/src/components/template/index";

import { FormErrors } from "./form-errors";

interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  label,
  type,
  placeholder,
  required,
  disabled,
  errors,
  className,
  defaultValue = "",
  onBlur
}, ref) => {
  const { pending } = useFormStatus();

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
          disabled={pending || disabled}
          className={cn(
            "text-sm px-2 py-1 h-7",
            className,
          )}
          aria-describedby={`${id}-error`}
        />
      </Div>
      <FormErrors
        id={id}
        errors={errors}
      />
    </Div>
  )
});

FormInput.displayName = "FormInput";
