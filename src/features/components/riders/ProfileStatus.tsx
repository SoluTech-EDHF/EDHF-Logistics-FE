import { Clock3, Star } from "lucide-react";
import type { StatusItem } from "./Status";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/common/skeleton";
import { Medal, Package } from "@/components/icons";

interface StatusItemProps {
  status: StatusItem;
}

const ProfileStatusCard = ({ status }: StatusItemProps) => {
  return (
    <div className="w-full min-h-46.75 bg-white shadow-md rounded-md flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className={`rounded-md p-2 bg-${status.color}/10 mb-3.5`}>
          {status.icon}
        </div>
        <p className="text-xl font-bold text-[#212121]">
          {status.value}
          {status.name.toLowerCase().includes("rate") ? "%" : ""}
        </p>
        <h3 className="text-lg font-medium text-[#212121]/85 max-w-28 text-center">
          {status.name}
        </h3>
      </div>
    </div>
  );
};

const ProfileStatus = ({ isLoading }: { isLoading: boolean }) => {
  const [profileStatcard, setProfileStatcard] = useState<StatusItem[] | []>([]);
  useEffect(() => {
    setTimeout(() => {
      setProfileStatcard([
        {
          id: 1,
          icon: <Star size={24} className="text-app-orange" />,
          name: "Rating",
          value: 4.9,
          color: "app-orange",
        },
        {
          id: 2,
          icon: <Package size={24} className="text-app-blue" />,
          name: "Deliveries This Month",
          value: 128,
          color: "app-blue",
        },
        {
          id: 3,
          icon: <Clock3 size={24} className="text-app-green" />,
          name: "On-Time Delivery Rate",
          value: 98,
          color: "app-green",
        },
        {
          id: 4,
          icon: <Medal size={24} className="text-app-orange" />,
          name: "Success Rate Overall",
          value: 99.5,
          color: "app-orange",
        },
      ]);
    }, 500);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-46.75 rounded-md shadow-md bg-black/30"
            />
          ))
        : profileStatcard.map((status) => (
            <ProfileStatusCard key={status.id} status={status} />
          ))}
    </div>
  );
};

export default ProfileStatus;
