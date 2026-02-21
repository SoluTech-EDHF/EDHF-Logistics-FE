import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppStore } from "@/store";

type Props = {
  children: React.ReactNode;
};

export const ProtectedRoutes: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  const { isAuthenticated, typeOfUser, user } = useAppStore();

  if (!isAuthenticated && !typeOfUser && !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
