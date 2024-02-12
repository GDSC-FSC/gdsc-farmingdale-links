/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { CommandDialog, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandInput } from "../ui/command";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Search, searchSchema } from "../../schema/search";
import { useSearchStore } from '@/src/core/store';
import { iconComponents } from '@/src/constants/index';

const camelToKebab = (str: string) => {
  return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
};

export function CommandMenu() {
  const setOpen = useSearchStore((state) => state.setOpen);
  const open = useSearchStore((state) => state.open);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const defaultValues: Search = {
    search: searchParams.get('q') || '',
  };

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema), defaultValues
  });

  const onSubmit = (values: z.infer<typeof searchSchema>) => {
    console.log(values);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen ]);

  const handleShortcutAction = useCallback((route: string) => {
    const kebabRoute = camelToKebab(route);
    if (route.startsWith('auth/')) {
      navigate(`${kebabRoute}`);
    } else {
      navigate(`/${kebabRoute}`);
    }
  }, [navigate]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CommandInput {...field} autoComplete="off" placeholder="Type a command or search..." />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
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
      items: ['Privacy', 'Terms', 'Accessibility', 'Cookies'],
    },
    {
      heading: 'Auth',
      items: ['Login', 'Signup', 'Forgot Password', 'Reset Password'],
    }
  ],
  handleShortcutAction: () => { },
};

export const SearchGroups: React.FC<SearchGroupsListProps> = ({ groups, handleShortcutAction }) => {
  return (
    <>
      {groups.map((group, groupIndex) => (
        <CommandGroup key={groupIndex} heading={group.heading}>
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
    <CommandItem onSelect={onSelect}>
      {iconComponents.map((route, index) => (
        <div key={index}>
          {route.legal.map((icon, idx) => (
            <div key={idx}>{icon}</div>
          ))}
          {route.auth.map((icon, idx) => (
            <div key={idx}>{icon}</div>
          ))}
        </div>
      ))}
      <span>{children}</span>
    </CommandItem>
  );
}
