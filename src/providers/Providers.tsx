import React from 'react'
import { ThemeProvider, Events, ContextMenuProvider, CookieConsent } from '@/src/components/providers'
import { AnimatePresence } from 'framer-motion'
import { NextUIProvider } from '@nextui-org/react'
import LazyImageWrapper from '@/src/components/wrappers/LazyImageWrapper'
const Providers: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({ children }) => {
  return (
    <NextUIProvider>
      <ThemeProvider
        defaultTheme={`dark`}
        storageKey="vite-ui-theme"
      >
        <CookieConsent />
        <AnimatePresence>
          <LazyImageWrapper>
            <Events>
              <ContextMenuProvider>
                {children}
              </ContextMenuProvider>
            </Events>
          </LazyImageWrapper>
        </AnimatePresence>
      </ThemeProvider>
    </NextUIProvider>
  )
}
export default Providers
