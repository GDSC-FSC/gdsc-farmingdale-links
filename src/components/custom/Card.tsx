import * as React from 'react'
interface CardProps extends React.ComponentPropsWithoutRef<'article'> { }
import { cn } from '@/src/lib/utils'
import { CardClasses } from '@/src/constants'
const Card = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, style, ...props }: CardProps, ref) => (
  <article
    className={cn(`${CardClasses}`, className)}
    ref={ref}
    style={style}
    {...props}
  />
))

Card.displayName = "Card"

const Script = React.forwardRef<
  HTMLSelectElement, React.HTMLAttributes<HTMLScriptElement>
>(({ ...props }) => (
  <script
    {...props}
  />
))

export {
  Card,
  Script
}
