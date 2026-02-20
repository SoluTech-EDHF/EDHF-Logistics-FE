import {
  EarningAnalytics,
  EarningHeader,
  RecentTransactions,
  RiderHeader,
} from "@/features/components/riders";
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
    <div className="bg-[#F2F7F8] w-full h-screen flex flex-col items-center overflow-hidden">
      <RiderHeader
        isLoading={appLoading}
        setDashboardSession={setDashboardSession}
        dashboardSession={dashboardSession}
      />
      <div className="sm:px-10 mt-7 max-sm:w-9/10 w-full flex flex-col gap-12.5 overflow-y-auto [scrollbar-width:none]">
        <EarningHeader isLoading={appLoading} />
        <EarningAnalytics isLoading={appLoading} />
        <RecentTransactions isLoading={appLoading} />
      </div>
    </div>
  );
};

export default Earnings;
