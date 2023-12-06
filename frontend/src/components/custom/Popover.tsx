"use client";

import { X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { useContext, ElementRef, useRef } from "react";
import { UserContext } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { AuthItems, NavItems } from "@/components/NavItems";

export const CustomPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: PopoverProps) => {
  const { user } = useContext(UserContext);
  const closeRef = useRef<ElementRef<"button">>(null);
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
        {/* <PopoverClose ref={closeRef} asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose> */}
        <>
          <NavItems />
          <AuthItems />
        </>
      </PopoverContent>
    </Popover>
  );
};
