type sizes = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96";

type TwSize<Dimension extends string> =
  Dimension extends `size-${infer N}`
  ? {
    dimension: N;
  }
  : never;

type SVGIconProps = {
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
  size?: sizes | '4';
};

type SVGIconParams = ({ className, size, props }: SVGIconProps) => JSX.Element;

type IconsProps = {
  logo: SVGIconParams;
  webIcons: {
    gdsc: SVGIconParams;
  };
  socialIcons: {
    linkedIn: SVGIconParams;
    instagram: SVGIconParams;
    gitHub: SVGIconParams;
  };
  functionalIcons: {
    share: SVGIconParams;
    search: SVGIconParams;
    close: SVGIconParams;
    email: SVGIconParams;
    globe: SVGIconParams;
  };
  auth: {
    anonymous: SVGIconParams;
    google: SVGIconParams;
  }
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

type Prettify<T> = {
  [K in keyof T]: T[K];
} & NonNullable<unknown>;
