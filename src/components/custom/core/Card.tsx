import * as React from "react";
interface CardProps extends React.ComponentPropsWithoutRef<"article"> {}
import { CardClasses } from "@/src/constants";
import { cn } from "@/src/lib/utils";
const Card = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
	({ className, style, ...props }: CardProps, ref) => (
		<article
			className={cn(`${CardClasses}`, className)}
			ref={ref}
			style={style}
			{...props}
		/>
	),
);

Card.displayName = "Card";

export { Card };
