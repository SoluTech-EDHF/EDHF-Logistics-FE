import { ProtectedRoutes } from "@/routes";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <ProtectedRoutes>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </ProtectedRoutes>
  );
};

export default AppLayout;
