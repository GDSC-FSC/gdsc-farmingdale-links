import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router, Routes,
  useLocation
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '@/src/styles/globals.css'
import Providers from '@/src/providers/Providers';
import { Router as BaseRouter } from '@/src/routes';
import { useOnlineStatus } from './hooks';
import Fallback from '@/src/components/dom/Fallback';

export const RootLayout: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({ children }) => {
  const location = useLocation();
  const isOnline = useOnlineStatus();
  return (
    <Providers>
      <Routes location={location} key={location.pathname}>
        {isOnline ? (
          children
        ) : (<Fallback />)}
      </Routes>
    </Providers>
  )
}

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <>
      <Router>
        <RootLayout>
          <BaseRouter />
        </RootLayout>
      </Router>
    </>
  </React.StrictMode>,
)

reportWebVitals()
