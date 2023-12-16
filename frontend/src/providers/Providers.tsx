import { FC, PropsWithChildren } from 'react'
import { ThemeProvider, Events } from '../components/providers'
const Providers: FC = ({children}: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider>
        <Events>
          {children}
        </Events>
      </ThemeProvider>
    </>
  )
}

export default Providers