import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout, AuthLayout, MainLayout } from "@/layouts";
import { AboutUsPage, ContactUsPage, HomePage } from "@/pages/external";
import { Login } from "@/pages/auth";
import { Dashboard } from "@/pages/app";
import NotFound from "@/pages/NotFound";
import SignUp from "@/pages/auth/signUp";
import ForgetPassword from "@/pages/auth/ForgetPassword";
import Verification from "@/pages/auth/Verification";
import { Settings } from "@/features/users";
import {
  ActiveDeliveries,
  Earnings,
  RiderDeliveryHistory,
} from "@/features/users/riders";
import ProtectRoute from "./ProtectRoute";

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
    path: "/app",
    element: <AppLayout />,
    children: [
      // General routes for all users
      { index: true, element: <Dashboard /> },
      { path: "settings", element: <Settings /> },
      { path: "dispatch", element: <Dashboard /> },
      { path: "notification", element: <Dashboard /> },

      // Rider specific routes
      {
        path: "active-deliveries",
        element: (
          <ProtectRoute allowedRoles={["rider"]}>
            <ActiveDeliveries />
          </ProtectRoute>
        ),
      },
      {
        path: "rider/earnings",
        element: (
          <ProtectRoute allowedRoles={["rider"]}>
            <Earnings />
          </ProtectRoute>
        ),
      },
      {
        path: "rider/history",
        element: (
          <ProtectRoute allowedRoles={["rider"]}>
            <RiderDeliveryHistory />
          </ProtectRoute>
        ),
      },

      // Admin specific routes
      { path: "manage/drivers", element: <Dashboard /> },
      // { path: "", element: <Dashboard /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
