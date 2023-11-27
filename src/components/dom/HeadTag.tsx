import { PropsWithChildren } from 'react'
import Scripts from '../../scripts/Scripts'

export default function HeadTag({ children }: PropsWithChildren<object>) {
  return (
    <head>
      <Scripts />
      {children}
    </head>
  )
}