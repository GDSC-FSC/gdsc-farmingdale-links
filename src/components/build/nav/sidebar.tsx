"use client";

import { useLocalStorage } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion } from "@/components/ui/accordion";

import { NavItem } from "./nav-item";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({
  storageKey = "t-sidebar-state",
}: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );


  const defaultAccordionValue: string[] = Object.keys(expanded)
    .reduce((acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
  }, []);

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        <>
        {/*  */}
          <NavItem
            key={user.id}
            isActive={true}
            isExpanded={expanded[user.id]}
            onExpand={onExpand}
          />
        </>
      </Accordion>
    </>
  );
};
