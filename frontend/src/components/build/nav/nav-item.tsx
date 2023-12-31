"use client";

// 
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  Layout,
  Settings,
} from "lucide-react";
import { Div } from "../template/index";
import { cn } from "@/lib/utils";
import { 
  AccordionContent,
  AccordionItem, 
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { NavItems } from "@/components/NavItems";

interface NavItemProps {
  isExpanded: boolean;
  isActive: boolean;
  onExpand: (id: string) => void;
};

export const NavItem = ({
  isExpanded,
  isActive,
  onExpand,
}: NavItemProps) => {
  return (
    <AccordionItem
      value={user.id}
      className="border-none"
    >
      <AccordionTrigger
        onClick={() => onExpand(user.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <>
          Trigger
        </>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        <NavItems />
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <Div className="flex items-center gap-x-2">
      <Div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </Div>
      <Skeleton className="h-10 w-full" />
    </Div>
  );
};
