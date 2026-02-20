import { RiderHeader } from "@/features/components/riders";
import { useAppStore } from "@/store";
import { useEffect, useState } from "react";

const Earnings = () => {
  const { isLoading, dashboardSession, setDashboardSession } = useAppStore();
  const [appLoading, setappLoading] = useState(true);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setappLoading(false);
      }, 1000);
    }
  }, [isLoading]);
  return (
    <div>
      <RiderHeader
        isLoading={appLoading}
        setDashboardSession={setDashboardSession}
        dashboardSession={dashboardSession}
      />
      <div className="p-10 mt-7">Earnings for riders</div>
    </div>
  );
};

export default Earnings;
