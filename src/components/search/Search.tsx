import { useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { CommandDialog, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandInput } from "../ui/command";


const camelToKebab = (str: string) => {
  return str.replace(/[A-Z\s]/g, match => {
    if (match === " ") {
      return "-";
    } else {
      return `-${match.toLowerCase()}`;
    }
  });
};


export function CommandMenu({ open, setOpen }: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  const handleShortcutAction = useCallback((route: string) => {
    const kebabRoute = camelToKebab(route);
    if (route.startsWith('auth/')) {
      navigate(`${kebabRoute.replace('auth/', '/auth/')}`);
    } else {
      navigate(`/${kebabRoute}`);
    }
  }, [navigate]);

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      aria-label="Search"
    >
      <CommandInput autoComplete="off" placeholder="Type a command or search..." />
      <CommandList
        className={`border-t-0`}
      >
        <CommandEmpty>No results found...</CommandEmpty>
        <SearchGroups groups={SearchGroupsList.groups} handleShortcutAction={handleShortcutAction} />
      </CommandList>
    </CommandDialog>
  );
}

interface SearchGroupsListProps {
  groups: {
    heading: string;
    items: Array<string>;
  }[];
  handleShortcutAction: (route: string) => void;
}

const SearchGroupsList: SearchGroupsListProps = {
  groups: [
    {
      heading: 'Legal',
      items: ['Privacy', 'Terms', 'Accessibility', 'Cookies', 'Contact'],
    },
    {
      heading: 'Auth',
      items: ['Login'],
    }
  ],
  handleShortcutAction: () => { },
};

export const SearchGroups: React.FC<SearchGroupsListProps> = ({ groups, handleShortcutAction }) => {
  return (
    <>
      {groups.map((group, groupIndex) => (
        <CommandGroup
          key={groupIndex}
          heading={group.heading}

        >
          {group.items.map((item, itemIndex) => {
            const route = group.heading.toLowerCase() === 'auth' ? `auth/${item.toLowerCase()}` : item.toLowerCase();
            return (
              <Item key={itemIndex} onSelect={() => handleShortcutAction(route)}>
                {item}
              </Item>
            );
          })}
        </CommandGroup>
      ))}
    </>
  );
};

function Item({
  children,
  onSelect = () => { },
}: {
  children: React.ReactNode;
  onSelect?: () => void;
}) {
  return (
    <CommandItem className={` focus-within:opacity-15`} onSelect={onSelect}>
      <span>
        {children}
      </span>
    </CommandItem>
  );
}
