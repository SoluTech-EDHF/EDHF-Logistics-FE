import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout, AuthLayout, MainLayout } from "@/layouts";
import { AboutUsPage, ContactUsPage, HomePage } from "@/pages/external";
import { Login } from "@/pages/auth";
import { Dashboard } from "@/pages/app";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "contact", element: <ContactUsPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ index: true, path: "login", element: <Login /> }],
  },
  {
    path: "app",
    element: <AppLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },

  { path: "*", element: <NotFound /> },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
