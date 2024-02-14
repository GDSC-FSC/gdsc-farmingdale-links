import React from "react"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/components/ui/alert"
import { cn } from "@/src/lib/utils"
import { Icons } from "@/src/components/icons/icons"

export const CustomAlert: React.FC<{
  title: string
  description: string
  variant?: "default" | "destructive"
  titleClassname?: string
  descriptionClassName?: string
}> = ({
  title, description, variant = 'default', titleClassname, descriptionClassName
}) => {
    return (
      <Alert variant={variant}>
        {variant == 'destructive' ? (
          <ExclamationTriangleIcon className="h-4 w-4" />
        ) : (
          Icons.logo({
            size: `4`
          })
        )}
        <AlertTitle
          className={cn(``, titleClassname)}
        >
          {title}
        </AlertTitle>
        <AlertDescription
          className={cn(``, descriptionClassName)}
        >
          {description}
        </AlertDescription>
      </Alert>
    )
  }
