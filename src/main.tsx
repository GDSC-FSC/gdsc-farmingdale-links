import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { AnimatePresence } from "framer-motion"
import App from '@/app/App';
import '@/styles/css/index.css'
import '@/styles/global/globals.css'
import '@/styles/global/globals.scss'

export const RootLayout = ({children}: {children: React.ReactNode}) =>  {
  return (
    <>
      {children}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
);
