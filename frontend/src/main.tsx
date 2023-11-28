import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import App from './app/App.tsx';
import './index.css';
import { AnimatePresence } from "framer-motion"
import '../src/styles/css/index.css'
import '../src/styles/global/globals.css'
import '../src/styles/global/globals.scss'

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
