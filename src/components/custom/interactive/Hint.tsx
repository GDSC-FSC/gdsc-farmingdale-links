import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/src/components/ui/tooltip";

export const Hint = ({
	children,
	description,
	side = "bottom",
	sideOffset = 0,
}: HintProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent
					sideOffset={sideOffset}
					side={side}
					className="text-xs max-w-[220px] break-words"
				>
					{description}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
