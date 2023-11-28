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

