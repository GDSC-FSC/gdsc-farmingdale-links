import { FC, PropsWithChildren } from 'react'
import { ThemeProvider, Events } from '@/src/components/providers'
const Providers: FC = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider
        defaultTheme={`system`}
        storageKey="vite-ui-theme"
      >
        <Events>
          {children}
        </Events>
      </ThemeProvider>
    </>
  )
}

export default Providers