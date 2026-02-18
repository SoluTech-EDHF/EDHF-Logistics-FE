import { Manage } from "@/features/users";
import { useAppStore } from "@/store";
import { useEffect } from "react";

const Dashboard = () => {
  const { typeOfUser, isLoading, setLoading } = useAppStore();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [typeOfUser, isLoading, setLoading]);

  if (isLoading) {
    return <div className="w-full h-screen p-8">Loading dashboard...</div>;
  }

  if (!typeOfUser) {
    return (
      <div className="w-full h-screen p-4">
        No user type found {isLoading} hello
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <Manage user={typeOfUser} />
    </div>
  );
};

export default Dashboard;
