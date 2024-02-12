import { cn } from "@/src/lib/utils";
export const CenterLayout = ({
  children,
  className,
  Element
}: {
  children: React.ReactNode,
  Element: React.ElementType,
  className?: string
}): JSX.Element => {
  return (
    <Element className={cn(`h-full flex items-center justify-center`, className)}>
      {children}
    </Element>
  );
};
