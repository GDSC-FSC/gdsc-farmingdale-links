import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  // Route,
  // BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import './styles/globals.css';
import Providers from '@/src/providers/Providers';
// import { NotFound } from './components/dom';
import { useOnlineStatus } from './hooks';
import Fallback from '@/src/components/dom/Fallback';
import { StoreProvider } from '@/src/core/store';
import { App } from './app/App';
// import { Component as Privacy } from './routes/privacy';
// import { Component as Terms } from './routes/terms';
// import { Component as Accessibility } from './routes/accessibility';
// import { Component as Cookies } from './routes/cookies';
// import { Component as Contact } from './routes/contact';
// import { Component as Login } from './routes/auth/login';
// import { Component as SignUp } from './routes/auth/signup';
// import { Component as ForgotPassword } from './routes/auth/forgot-password';
// import { Component as ResetPassword } from './routes/auth/reset-password';
// import { CenterLayout, ContainerWrapper } from './components/layouts';

export const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const location = useLocation();
  const isOnline = useOnlineStatus();
  return (
    <Providers>
      <StoreProvider>
        <Routes key={location.pathname} location={location}>
          {isOnline ? (
            children
          ) : (
            <Fallback />
          )}
          {/* {children} */}
        </Routes>
      </StoreProvider>
    </Providers>
  );
};

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <>
      {/* <Router> */}
      {/* <Routes> */}
      {/* <CenterLayout Element="main"> */}
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="privacy" element={<Privacy />} /> */}
      {/* <Route path="terms" element={<Terms />} /> */}
      {/* <Route path="accessibility" element={<Accessibility />} /> */}
      {/* <Route path="cookies" element={<Cookies />} /> */}
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* </CenterLayout> */}
      <>
        <App />
      </>
      {/* <ContainerWrapper Element="main"> */}
      {/* <Route index element={<Navigate to="/auth/login" replace />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      {/* </ContainerWrapper> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  </React.StrictMode>
);
// reportWebVitals();
