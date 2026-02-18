import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthLayout = () => {
  const pageRoute = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pageRoute === "/auth") {
      navigate("/auth/login", { replace: true });
    }
  }, [pageRoute, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
