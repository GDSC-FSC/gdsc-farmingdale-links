import { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

export const Events = ({children}:PropsWithChildren) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}

export default Events
