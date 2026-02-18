import { Sidebar } from "@/components/ui";
import { ProtectedRoutes } from "@/routes";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <ProtectedRoutes>
      <div className="h-screen max-h-screen overflow-hidden flex justify-between relative">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </ProtectedRoutes>
  );
};

export default AppLayout;
