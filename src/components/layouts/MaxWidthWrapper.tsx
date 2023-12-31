import { cn } from '@/src/lib/utils'
import { ReactNode } from 'react'
import { Div } from '@/src/templates/index'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <Div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </Div>
  )
}

export default MaxWidthWrapper
