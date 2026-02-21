import {
  DeliveryHistory,
  HistoryHeader,
  RiderHeader,
} from "@/features/components/riders";
import { useAppStore } from "@/store";
import { useEffect, useState } from "react";

export interface CompletedDeliveriesProp {
  deliveryId: string;
  deliveryDistance: number;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string;
  dropoffTime: string;
  earnings: number;
}

const History = () => {
  const { isLoading, dashboardSession, setDashboardSession } = useAppStore();
  const [appLoading, setappLoading] = useState(true);
  const [completedDeliveries, setcompletedDeliveries] = useState<
    CompletedDeliveriesProp[] | []
  >([]);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setappLoading(false);
        setcompletedDeliveries([
          {
            deliveryId: "EGS-001234",
            deliveryDistance: 6.1,
            pickupLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            dropoffLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            pickupTime: "10:40",
            dropoffTime: "12:30",
            earnings: 10000,
          },
          {
            deliveryId: "EGS-001234",
            deliveryDistance: 2.5,
            pickupLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            dropoffLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            pickupTime: "10:40",
            dropoffTime: "12:30",
            earnings: 7000,
          },
          {
            deliveryId: "EGS-001234",
            deliveryDistance: 4.2,
            pickupLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            dropoffLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            pickupTime: "10:40",
            dropoffTime: "12:30",
            earnings: 15000,
          },
          {
            deliveryId: "EGS-001234",
            deliveryDistance: 3.7,
            pickupLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            dropoffLocation: "26 Ashafa, St 3B, Olodi-Apapa, Lagos",
            pickupTime: "10:40",
            dropoffTime: "12:30",
            earnings: 8500,
          },
        ]);
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
      <div className="sm:px-10 mt-7 max-sm:w-9/10 w-full flex flex-col gap-4.5 overflow-y-auto overflow-x-hidden [scrollbar-width:none]">
        <HistoryHeader completedDeliveries={completedDeliveries.length} />
        <DeliveryHistory
          isLoading={appLoading}
          completedDeliveries={completedDeliveries}
        />
      </div>
    </div>
  );
};

export default History;
