import { memo } from 'react';
import { Article } from './Article';
import { Div } from './Div';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Menu } from './Menu';
import { Nav } from './Nav';
import { Picture } from './Picture';
import { Section } from './Section';

const MemoArticle = memo(Article);
const MemoDiv = memo(Div);
const MemoFooter = memo(Footer);
const MemoHeader = memo(Header);
const MemoMain = memo(Main);
const MemoMenu = memo(Menu);
const MemoNav = memo(Nav);
const MemoPicture = memo(Picture);
const MemoSection = memo(Section);

export {
  MemoArticle,
  MemoDiv,
  MemoFooter,
  MemoHeader,
  MemoMain,
  MemoMenu,
  MemoNav,
  MemoPicture,
  MemoSection,
  Article,
  Div,
  Footer,
  Header,
  Main,
  Menu,
  Nav,
  Picture,
  Section,
};
