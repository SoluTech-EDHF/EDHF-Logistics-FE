import {
  RiderHeader,
  RiderGreeting,
  RiderStatus,
  RiderWeeklyPerformance,
} from "@/features/components/riders";
import { useAppStore } from "@/store";
import { useEffect, useState } from "react";
import ProfileSession from "./ProfileSession";

export interface StatusProp {
  name: string;
  value: number;
}

const App = () => {
  const [status, setStatus] = useState<StatusProp[] | []>([]);
  const { isLoading, dashboardSession, setDashboardSession } = useAppStore();
  const [appLoading, setappLoading] = useState(true);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setappLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => {
      setStatus([
        {
          name: "Active Deliveries",
          value: 3,
        },
        {
          name: "Completed Today",
          value: 3,
        },
        {
          name: "Today's Earnings",
          value: 20000,
        },
        {
          name: "Rating",
          value: 4.9,
        },
      ]);
    }, 500);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <RiderHeader
        isLoading={appLoading}
        setDashboardSession={setDashboardSession}
        dashboardSession={dashboardSession}
      />
      {dashboardSession === "profile" ? (
        <ProfileSession />
      ) : (
        <div className="sm:px-10 mt-7 max-sm:w-9/10 w-full flex flex-col gap-7 overflow-y-auto [scrollbar-width:none]">
          <RiderGreeting
            isLoading={appLoading}
            activeDeliveries={
              status.find((s) => s.name === "Active Deliveries")?.value ?? 0
            }
          />
          <RiderStatus status={status} isLoading={appLoading} />
          <RiderWeeklyPerformance isLoading={appLoading} />
        </div>
      )}
    </div>
  );
};

export default App;
