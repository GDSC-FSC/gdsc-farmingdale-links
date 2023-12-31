import { PropsWithChildren } from 'react'
import Scripts from '@/src/@/src/scripts/Scripts'

export default function HeadTag({ children }: PropsWithChildren<object>) {
  return (
    <head>
      <Scripts />
      {children}
    </head>
  )
}