import { Button } from '@/src/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { useSearchStore } from '@/src/core/store';

export const SearchButton = () => {
  const setOpen = useSearchStore((state) => state.setOpen);
  const openSearch = () => {
    setOpen(true);
  };

  return (
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
  );
};
