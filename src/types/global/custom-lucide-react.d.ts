import { LucideIcon as BaseLucideIcon, LucideProps } from "lucide-react";

declare global {
  namespace LucideReact {
    interface LucideIconWrapperProps extends LucideProps {}

    export const LucideIcon: React.ForwardRefExoticComponent<LucideIconWrapperProps>;
  }
}

export { LucideReact, BaseLucideIcon };
