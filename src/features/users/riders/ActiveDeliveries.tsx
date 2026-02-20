import { RiderHeader } from "@/features/components/riders";
import { useAppStore } from "@/store";
import { useEffect, useState } from "react";

const ActiveDeliveries = () => {
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
    <>
      <RiderHeader
        isLoading={appLoading}
        setDashboardSession={setDashboardSession}
        dashboardSession={dashboardSession}
      />
      <div className="p-10 mt-7">Active Deliveries for riders</div>
    </>
  );
};

export default ActiveDeliveries;
