import React from 'react'

import { Icons } from '../icons/icons'
import { CustomCard as Card } from '../custom/Card'

const AuthContainer = ({ cardContent, title, buttonText }: { cardContent: React.ReactNode, title: AuthTitle, buttonText: string}) => {
  return (
    <Card
      className={'w-fit flex flex-col justify-between items-center bg-slate-400/10 select-none'}
      logo={true}
      customLogo={
        Icons.logo
      }
      title={title}
      cardContent={cardContent}
    />
  )
}

export default AuthContainer
