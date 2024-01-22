import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { AnimatePresence } from "framer-motion"
import App from '@/src/app/App';
import reportWebVitals from './reportWebVitals';
import '@/src/styles/css/index.css'
import '@/src/styles/global/globals.css'
import '@/src/styles/global/globals.scss'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

const container = document.getElementById('root')! as HTMLElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <NextUIProvider>
      <AnimatePresence>
        <Router>
          <RootLayout>
            <App />
          </RootLayout>
        </Router>
      </AnimatePresence>
    </NextUIProvider>
  </StrictMode>,
)

reportWebVitals()
