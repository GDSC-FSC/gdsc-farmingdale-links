import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { AnimatePresence } from "framer-motion"
import App from '@/src/app/App';
import reportWebVitals from './reportWebVitals';
import '@/src/styles/globals.css'

export const RootLayout: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <AnimatePresence>
        <Router>
          <RootLayout>
            <App />
          </RootLayout>
        </Router>
      </AnimatePresence>
    </NextUIProvider>
  </React.StrictMode>,
)

reportWebVitals()
