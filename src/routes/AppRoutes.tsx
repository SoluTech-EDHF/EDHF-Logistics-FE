import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout, AuthLayout, MainLayout } from "@/layouts";
import { AboutUsPage, ContactUsPage, HomePage } from "@/pages/external";
import { Login } from "@/pages/auth";
import { Dashboard } from "@/pages/app";
import NotFound from "@/pages/NotFound";
import SignUp from "@/pages/auth/signUp";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import Verification from "@/pages/auth/Verification";

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
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "forget-password", element: <ForgetPassword /> },
      { path: "verification", element: <Verification /> },
    ],
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
