import { Navigate } from "react-router-dom";
import { useAppStore } from "@/store";
import type { UserRole } from "@/features/users";

type Props = {
  allowedRoles: UserRole[];
  children: React.ReactNode;
};

const ProtectRoute = ({ allowedRoles, children }: Props) => {
  const userRole = useAppStore((s) => s.typeOfUser);

  if (!userRole) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/not-found" replace />;
  }

  return <>{children}</>;
};

export default ProtectRoute;
