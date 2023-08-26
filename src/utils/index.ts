import { MouseEventHandler } from 'react';
import { GlobeIcon, InstagramIcon } from '../components/icons/index'
type Link = {
    name: string;
    path: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export interface CustomButtonProps {
  isDisabled?: boolean;
  containerStyles?: string;
  textStyles?: string;
  link: string | undefined;
  title: string;
  share: boolean
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
const navLinks: Link[] = [
  {
    name: "Home",
    path: "/",
    icon: GlobeIcon,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/lemonade_ig/",
    icon: InstagramIcon,
  }
]
const buttonLinks: Link[] = [
  {
    name: "test1",
    path: "https://www.instagram.com/lemonade_ig/",
  },
  {
    name: "test2",
    path: "/",
  },
    {
    name: "test2",
    path: "/",
  },
    {
    name: "test2",
    path: "/",
  },
    {
    name: "test2",
    path: "/",
  },
];
export { navLinks, buttonLinks }