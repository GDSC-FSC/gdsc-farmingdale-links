import { createStore, Provider } from "jotai";
import { createElement, ReactNode } from "react";
import { create } from "zustand";

export const useSearchStore = create<SearchState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export const usePastEventsStore = create<EventsState['past']>((set) => ({
  pastEvents: [],
  setPastEvents: (pastEvents) => set({ pastEvents }),
}));

export const useUpcomingEventsStore = create<EventsState['upcoming']>((set) => ({
  upcomingEvents: [],
  setUpcomingEvents: (upcomingEvents) => set({ upcomingEvents }),
}));

export const useLinksStore = create<LinksState>((set) => ({
  links: [],
  setLinks: (links) => set({ links }),
}));


export const store = createStore();

export function StoreProvider(props: StoreProviderProps): JSX.Element {
  return createElement(Provider, { store, ...props });
}

export type StoreProviderProps = {
  children: ReactNode;
};
