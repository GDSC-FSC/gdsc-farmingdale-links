import { cn } from '@/src/lib/utils'
export const ContainerWrapper = ({
  className,
  children,
  Element = `div`
}: {
  className?: string
    children: React.ReactNode,
    Element: React.ElementType
}): JSX.Element => {
  return (
    <Element
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </Element>
  )
}
