import * as React from 'react'
import { Button } from '@/src/components/ui/button'
import { signout, useSignOut } from '@/src/core/auth'

export function LogoutButton(props: LogoutButtonProps): JSX.Element {
  const { ...other } = props
  const [signOut, inFlight] = useSignOut()
  return (
    <Button
      variant={`outline`}
      onClick={signOut}
      disabled={inFlight}
      children={
        <>
          {`${signout}`}
        </>
      }
      {...other}
    />
  )
}

export type LogoutButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">
