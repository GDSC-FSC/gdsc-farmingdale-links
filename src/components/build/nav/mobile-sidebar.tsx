import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useMobileSidebar } from "@/src/hooks/index";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent } from "@/src/components/ui/sheet";
import { Sidebar } from "./sidebar";

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
          side="left"
          className="p-2 pt-10"
        >
          <Sidebar
            storageKey="t-sidebar-mobile-state"
          />
        </SheetContent>
      </Sheet>
    </>
  )
}