import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/src/components/ui/popover";

import { NavItems } from "@/src/components/build/nav/index";

export const CustomPopover = ({
	children,
	side = "bottom",
	align,
	sideOffset = 0,
}: PopoverProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent
				align={align}
				className="w-44 pt-3 mt-4 mr-2 p-1"
				side={side}
				sideOffset={sideOffset}
			>
				<>
					<NavItems />
				</>
			</PopoverContent>
		</Popover>
	);
};
