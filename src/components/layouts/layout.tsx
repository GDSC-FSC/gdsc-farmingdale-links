/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CenterLayout, ContainerWrapper } from ".";
import { Navbar, FooterBar } from "../build";
import { BackgroundGradientAnimation } from '../animation/BackgroundGradientAnimation';
import { LegalNav } from '../../routes/index'
export function MainLayout(): JSX.Element {
  const location = useLocation();
  return (
    <Fragment>
      {location.pathname === '/' ?  (<Navbar />) : <LegalNav />  }
      <ContainerWrapper Element={`main`} className={`h-screen w-screen flex items-center justify-center flex-col`}>
        <Suspense>
          <Outlet />
        </Suspense>
      </ContainerWrapper>
    </Fragment>
  );
}

export function BaseLayout(): JSX.Element {
  return (
    <Fragment>
      <SemanticLayout>
        <CenterLayout Element={`main`} className={`h-screen w-screen flex items-center justify-center`}>
          <BackgroundGradientAnimation>

          <Suspense>
            <Outlet />
          </Suspense>
          </BackgroundGradientAnimation>
        </CenterLayout>
      </SemanticLayout>
    </Fragment>
  );
}

const SemanticLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterBar />
    </>
  );
}
