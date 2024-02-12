import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";

import { AuthItems, NavItems } from "@/src/components/custom/nav/index";

export const CustomPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: PopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-44 pt-3 mt-4 mr-2"
        side={side}
        sideOffset={sideOffset}
      >
        <>
          <NavItems />
          <AuthItems />
        </>
      </PopoverContent>
    </Popover>
  );
};
