import { XCircle } from "lucide-react";
import { Div } from "@/src/components/templates/index";
import type { FieldErrors } from "react-hook-form";
interface FormErrorsProps {
  id: string;
  errors?: FieldErrors;
}

export const FormErrors = ({
  id,
  errors
}: FormErrorsProps) => {
  if (!errors) {
    return null;
  }

  return (
    <Div
      attributes={{
        id: `${id}-error`,
        "aria-live": "polite"
      }}
      className="mt-2 text-xs text-rose-500"
    >
      {Object.keys(errors).map(fieldName => (
        <Div
          key={fieldName}
          className="flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm"
        >
          <XCircle className="h-4 w-4 mr-2" />
          {String(errors[fieldName])}
        </Div>
      ))}
    </Div>
  );
};
