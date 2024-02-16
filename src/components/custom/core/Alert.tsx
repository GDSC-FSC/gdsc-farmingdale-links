import React from "react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/src/components/ui/alert"
import { cn } from "@/src/lib/utils"

export const CustomAlert: React.FC<{
  title: string
  description: string
  variant?: "default" | "destructive"
  className?: string
  titleClassname?: string
  descriptionClassName?: string
}> = ({
  title, description, variant = 'default', titleClassname, descriptionClassName, className
}) => {
    return (
      <Alert
        variant={variant}
        className={`
          w-full bg-destructive text-white
          ${cn(``, className)}
        `}
      >

        <AlertTitle
          className={cn(`left-0 w-full`, titleClassname)}
          >
          {title}
        </AlertTitle>
        <AlertDescription
          className={cn(`w-full `, descriptionClassName)}
          >
          {description}
        </AlertDescription>
      </Alert>
    )
  }
