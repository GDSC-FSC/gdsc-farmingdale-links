import React from 'react'
interface CardProps extends React.ComponentPropsWithoutRef<'article'> {}
import { cn } from '@/src/lib/utils'
const Card: React.FC<CardProps> = ({
  className, style, ...props
}, ref) => {
  return (
    <article className={cn(``,className)} ref={ref} style={style} {...props} />
  )
}
Card.displayName = "Card"

const Script = React.forwardRef<
  HTMLSelectElement, React.HTMLAttributes<HTMLScriptElement>
>(({ ...props}) => (
  <script
    {...props}
  />
))

export {
  Card,
  Script
}
