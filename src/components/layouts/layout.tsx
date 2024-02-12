import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CenterLayout, ContainerWrapper } from ".";

export function MainLayout(): JSX.Element {
  return (
    <Fragment>
        <Suspense>
          <Outlet />
        </Suspense>
    </Fragment>
  );
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
  return (
    <Fragment>
        <Suspense>
          <Outlet />
        </Suspense>
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
      {children}
    </>
  );
}
