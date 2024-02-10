import { lazy, memo } from 'react';
export * from './semantics';
export * from './primitivess'
export const {
  MemoArticle,
  MemoDiv,
  MemoFooter,
  MemoHeader,
  MemoMain,
  MemoMenu,
  MemoNav,
  MemoPicture,
  MemoSection,
} = {
  MemoArticle: memo(lazy(() => import("./semantics").then(({ Article }) => ({ default: Article })))),
  MemoDiv: memo(lazy(() => import("./semantics").then(({ Div }) => ({ default: Div })))),
  MemoFooter: memo(lazy(() => import("./semantics").then(({ Footer }) => ({ default: Footer })))),
  MemoHeader: memo(lazy(() => import("./semantics").then(({ Header }) => ({ default: Header })))),
  MemoMain: memo(lazy(() => import("./semantics").then(({ Main }) => ({ default: Main })))),
  MemoMenu: memo(lazy(() => import("./semantics").then(({ Menu }) => ({ default: Menu })))),
  MemoNav: memo(lazy(() => import("./semantics").then(({ Nav }) => ({ default: Nav })))),
  MemoPicture: memo(lazy(() => import("./semantics").then(({ Picture }) => ({ default: Picture })))),
  MemoSection: memo(lazy(() => import("./semantics").then(({ Section }) => ({ default: Section })))),
}

