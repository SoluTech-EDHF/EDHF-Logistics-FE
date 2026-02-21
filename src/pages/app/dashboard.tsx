import { Manage } from "@/features/users";
import { useAppStore } from "@/store";
import { useEffect } from "react";

const Dashboard = () => {
  const { typeOfUser, isLoading, setLoading } = useAppStore();

  useEffect(() => {
    if (typeOfUser && isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [typeOfUser, isLoading, setLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen p-8 bg-[#F2F7F8]">
        Loading dashboard...
      </div>
    );
  }

  if (!typeOfUser) {
    return (
      <div className="w-full h-screen p-4 bg-[#F2F7F8]">
        No user type found. Please log in to access the dashboard.
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#F2F7F8]">
      <Manage user={typeOfUser} />
    </div>
  );
};

export default Dashboard;
