import { Button } from '@/src/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { RESET_DELAY_MS } from '@/src/types/global/global';
import { useToast } from '../ui/use-toast';
import { useCallback, useEffect, useState } from 'react';
import { CommandMenu } from '.';
import { cn } from '@/src/lib/utils';
export const SearchButton = ({className}: {className?: string}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { SHORT } = RESET_DELAY_MS;
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
      if ((event.key === "k" && event.ctrlKey)) {
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
          description: `Search was closed after being open for ${(SHORT / 1000)} seconds`,
        })
      }, SHORT);
    }

    return () => { clearTimeout(timeoutId) };
  }, [SHORT, isSearchOpen, closeSearch, toast]);
  return (
    <>
      <Button
        className={cn(`flex items-center justify-center space-x-2 bg-foreground-800/50 hover:bg-black/20 aria-selected:bg-black/20`, className)}
        onClick={openSearch}
      >
        <span className={cn(`flex items-center justify-start gap-2 opacity-60 hover:opacity-100`, className)}>
          <SearchIcon />
          <span className="text-[13px] font-medium">Search</span>
        </span>
        <span className="border-1 flex space-x-1 rounded-[4px] border-primary-60 px-[3px]">
          <kbd>Ctrl+</kbd>
          <kbd>K</kbd>
        </span>
      </Button>
      {isSearchOpen && (
        <CommandMenu open={isSearchOpen} setOpen={openSearch} />
      )}
    </>
  );
};
