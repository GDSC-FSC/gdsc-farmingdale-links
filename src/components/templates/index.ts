import { lazy, memo } from 'react';
export * from './Article';
export * from './Div';
export * from './Footer';
export * from './Header';
export * from './Main';
export * from './Menu';
export * from './Nav';
export * from './Picture';
export * from './Section';

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
  MemoArticle: memo(lazy(() => import("./Article").then(({ Article }) => ({ default: Article })))),
  MemoDiv: memo(lazy(() => import("./Div").then(({ Div }) => ({ default: Div })))),
  MemoFooter: memo(lazy(() => import("./Footer").then(({ Footer }) => ({ default: Footer })))),
  MemoHeader: memo(lazy(() => import("./Header").then(({ Header }) => ({ default: Header })))),
  MemoMain: memo(lazy(() => import("./Main").then(({ Main }) => ({ default: Main })))),
  MemoMenu: memo(lazy(() => import("./Menu").then(({ Menu }) => ({ default: Menu })))),
  MemoNav: memo(lazy(() => import("./Nav").then(({ Nav }) => ({ default: Nav })))),
  MemoPicture: memo(lazy(() => import("./Picture").then(({ Picture }) => ({ default: Picture })))),
  MemoSection: memo(lazy(() => import("./Section").then(({ Section }) => ({ default: Section })))),
}

