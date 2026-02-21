import { Skeleton } from "@/components/common/skeleton";
import { Naira } from "@/components/icons";
import type { CompletedDeliveriesProp } from "@/features/users/riders/History";
import { formartTime } from "@/utils";
import { CircleCheck, Clock, Locate } from "lucide-react";

const DeliveryHistoryComponent = ({
  delivery,
}: {
  delivery: CompletedDeliveriesProp;
}) => {
  return (
    <div className="w-full min-h-45 h-auto rounded-md bg-white flex flex-col justify-between gap-1.5">
      <div className="flex flex-col justify-between gap-1.25 px-2.75 pt-5.5">
        <div className="flex justify-between gap-16">
          <div className="flex">
            <span className="flex gap-1 text-[#212121]/85 text-lg font-medium">
              <CircleCheck size={20} className="text-app-green mt-1" />
              {delivery?.deliveryId}
            </span>
          </div>
          <div className="flex flex-col items-center mt-0.75">
            <span className="flex items-center text-lg text-app-green gap-0">
              <Naira size={18} />
              {delivery?.earnings}
            </span>
            <span className="text-[#212121]/50 text-lg font-medium w-fit">
              {delivery?.deliveryDistance} Km
            </span>
          </div>
        </div>
        <span className="flex gap-1 text-[#212121]/50 text-lg font-medium max-w-67.5">
          <Locate className="text-app-green mt-1" size={17} />{" "}
          {delivery?.pickupLocation}
        </span>
      </div>
      <div className="flex gap-3.25 border border-t-[#212121]/50 px-2.75 pt-2.75 pb-3.75 min-h-fit rounded-b-md max-lg:justify-between w-full">
        <span className="flex items-center gap-1 text-[#212121]/50 text-lg font-medium lg:pr-3">
          <Clock size={20} />
          Pickup:{" "}
          {delivery?.pickupTime
            ? formartTime(delivery?.pickupTime)
            : "--:-- --"}
        </span>
        <span className="flex items-center gap-1 text-[#212121]/50 text-lg font-medium lg:pr-3">
          <CircleCheck size={20} />
          Delivered:{" "}
          {delivery?.dropoffTime
            ? formartTime(delivery?.dropoffTime)
            : "--:-- --"}
        </span>
      </div>
    </div>
  );
};

const DeliveryHistory = ({
  isLoading,
  completedDeliveries,
}: {
  isLoading: boolean;
  completedDeliveries: CompletedDeliveriesProp[];
}) => {
  return (
    <div className="space-y-3.25 w-full min-h-fit mb-7.5">
      {isLoading
        ? [1, 2, 3, 4, 5].map((_, index) => (
            <Skeleton
              key={index}
              className="w-full min-h-45 rounded-md bg-black/30"
            />
          ))
        : completedDeliveries.map((delivery, index) => (
            <DeliveryHistoryComponent key={index} delivery={delivery} />
          ))}
    </div>
  );
};

export default DeliveryHistory;
