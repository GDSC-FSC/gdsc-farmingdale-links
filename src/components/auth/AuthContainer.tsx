import React from 'react'

import { Card } from '../custom'
const AuthContainer = ({  title, }: {  title: string}) => {
  return (
    <Card
      className={'w-fit flex flex-col justify-between items-center bg-slate-400/10 select-none'}
      title={title}
    />
  )
}

export default AuthContainer
