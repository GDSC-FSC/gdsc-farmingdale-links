type LucideIconWrapperProps = {
  className?: string;
  props: typeof LucideReact['LucideIcon'];
};

type IconsParams = ({ className, props }: LucideIconWrapperProps) => JSX.Element;

type IconsProps = {
  logo: IconsParams;
  closeFilled: IconsParams;
  search: IconsParams;
  webIcons: {
    instagram: IconsParams;
    globe: IconsParams;
    share: IconsParams;
    gitHub: IconsParams;
    gdsc: IconsParams;
  };
};

type Link = {
    name: string;
    path: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
interface CustomButtonProps {
  isDisabled?: boolean;
  containerStyles?: string;
  textStyles?: string;
  link: string | undefined;
  title: string;
  share: boolean
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ApiJsonResponse<T> {
    status: number;
    response?: T;
}