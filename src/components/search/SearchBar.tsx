import { Button } from "@/src/components/ui/button";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useCallback, useEffect, useState } from "react";
import { SearchIcon } from "../icons/components";
import { Dialog } from "@/src/components/ui/dialog";
import { useToast } from "@/src/components/ui/use-toast";
import Modal from "react-modal";
import { RESET_DELAY_MS } from "@/src/types/global/global";
import { Search } from "./Search";

export const SearchBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { SHORT, LONG, TEST } = RESET_DELAY_MS;
  const { toast } = useToast();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, [])

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.key === "k" && event.ctrlKey) || event.metaKey) {
        event.preventDefault();
        if (isSearchOpen) {
          closeSearch();
        } else {
          openSearch();
        }
      }
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [isSearchOpen, openSearch, closeSearch, toast]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isSearchOpen) {
      timeoutId = setTimeout(() => {
        closeSearch();
        toast({
          title: "Search closed",
          description: `Search was closed after being open for ${(TEST / 1000)} seconds`,
        })
      }, TEST);
    }

    return () => { clearTimeout(timeoutId) };
  }, [TEST, isSearchOpen, closeSearch, toast]);
  return (
    <>
      <Button
        className="flex items-center justify-center space-x-2"
        onClick={openSearch}
      >
        <span className="flex items-center justify-center gap-2 opacity-60 hover:opacity-100">
          <SearchIcon />
          <span className="text-[13px] font-medium">Search</span>
        </span>
        <span className="border-1 flex space-x-1 rounded-[4px] border-primary-60 px-[3px]">
          <kbd>Ctrl+</kbd>
          <kbd>K</kbd>
        </span>
      </Button>
      <Modal
        parentSelector={() => document.querySelector('#root')!}
        ariaHideApp={false}
        isOpen={isSearchOpen}
        onAfterOpen={() => { }}
        onRequestClose={closeSearch}
        overlayElement={(_props: unknown, children: ChildrenProps) => (
          <section className={modalStyles}>
            {children}
          </section>
        )}
        contentElement={(_props: unknown, children: ChildrenProps) => (
          <Dialog>
            <article className="vercel">
              {children}
            </article>
          </Dialog>
        )}
        role={`dialog`}
        contentLabel={`search`}
      >
        <Search />
      </Modal>
    </>
  );
};

const modalStyles = `fixed left-[50%] top-[50%] z-50 grid w-screen max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200
  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
  data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
  data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg`;


type ChildrenProps = string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined
