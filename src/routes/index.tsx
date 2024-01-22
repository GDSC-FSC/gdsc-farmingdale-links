/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { createElement } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { NotFound } from "@/src/components/dom/index";
import { CenterLayout, ContainerWrapper } from "@/src/components/layouts/index";

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "privacy", lazy: () => import("./privacy") },
      { path: "terms", lazy: () => import("./terms") },
      { path: "accessibility", lazy: () => import("./accessibility") },
    ],
  },
  {
    path: "/auth",
    element: <CenterLayout Element={`main`} />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "/login", lazy: () => import("./auth/login") },
      { path: "/signup", lazy: () => import("./auth/signup") },
      { path: "/forgot-password", lazy: () => import("./auth/forgot-password") },
      { path: "/reset-password", lazy: () => import("./auth/reset-password") },
    ],
  },
]);

export function Router(): JSX.Element {
  return createElement(RouterProvider, { router });
}

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
