"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type="submit"
      variant={variant}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
