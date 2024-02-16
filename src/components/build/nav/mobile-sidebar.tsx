import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useMobileSidebar } from "@/src/hooks/index";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent } from "@/src/components/ui/sheet";
import { Sidebar } from "./sidebar";
import Settings from "../../custom/interactive/Settings";
import { SearchButton } from "../../search";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { Div } from "../../templates";

export const MobileSidebar = () => {
  const pathname = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="right"
          className={`p-2 pt-10 bg-foreground-100 100 h-full fixed transition-all duration-300 ease-in-out overflow-y-auto bg-opacity-20
backdrop-filter backdrop-blur-[10px] space-y-2`}
        >
          <SearchButton className={`w-full`} />
          <Sidebar
            storageKey="t-sidebar-mobile-state"
          />
          <Accordion type="multiple">
            <AccordionItem value="settings" className="border-none">
              <AccordionTrigger
                className="flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline"
              >        <Div className="flex items-center gap-x-2">
                  <Button
                    className="w-full"
                    variant="ghost"
                    size="sm"
                  >
                    Settings
                  </Button>
                </Div>
              </AccordionTrigger>
              <AccordionContent
                className={`flex items-center justify-center mx-auto p-2`}
              >
                <Settings />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    </>
  )
}
