import { ShareIcon } from "@/src/components/icons/components";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import type { CustomButtonProps } from "@/src/types/frontend/custom-component";
import { Link } from "@nextui-org/react";
import type { ElementType } from "react";

const classes = {
	button: "",
	content: "",
	label: "",
};

export const CustomButton: React.FC<CustomButtonProps> = ({
	className: classNameFromProps,
	disabled,
	el: elFromProps = "link",
	href,
	label,
	newTab,
	onClick,
	share,
	type = "button",
}) => {
	let el = elFromProps;

	const newTabProps = newTab
		? { target: "_blank", rel: "noopener noreferrer" }
		: {};

	const className = [classes, classNameFromProps].filter(Boolean).join(" ");

	const content = (
		<Button className={cn(`${classes.content}`, "")}>
			<span className={cn(`${classes.label}`, "")}>{label}</span>
			{share && <ShareIcon />}
		</Button>
	);

	if (onClick || type === "submit") el = "button";

	if (el === "link") {
		return (
			<Link
				href={href || ""}
				className={cn(className, "")}
				{...newTabProps}
				onClick={onClick}
				target={`_blank`}
			>
				{content}
			</Link>
		);
	}
	const Element: ElementType = el;
	return (
		<Element
			href={href}
			className={cn(className, "")}
			type={type}
			{...newTabProps}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</Element>
	);
};
