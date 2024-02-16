import React from 'react'
import { ThemeProvider, Events, ContextMenuProvider, CookieConsent, CarouselProvider } from '../components/providers/index'
import { AnimatePresence } from 'framer-motion'
import { NextUIProvider } from '@nextui-org/react'
import LazyImageWrapper from '../components/wrappers/LazyImageWrapper'
const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
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
              <CarouselProvider>

              <ContextMenuProvider>
                {children}
              </ContextMenuProvider>
              </CarouselProvider>
            </Events>
          </LazyImageWrapper>
        </AnimatePresence>
      </ThemeProvider>
    </NextUIProvider>
  )
}
export default Providers
