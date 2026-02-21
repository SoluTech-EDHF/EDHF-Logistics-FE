import { Skeleton } from "@/components/common/skeleton";
import { Money, Naira, Package } from "@/components/icons";
import type { StatusProp } from "@/features/users/riders/app";
import { formatNumber } from "@/utils";
import { CircleCheck, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Active Deliveries": <Package size={24} className="text-app-orange" />,
  "Completed Today": <CircleCheck size={24} className="text-app-blue" />,
  "Today's Earnings": <Money size={24} className="text-app-green" />,
  Rating: <Star size={24} className="text-app-orange" />,
};

const bgColorMap: Record<string, string> = {
  "Active Deliveries": "bg-app-orange/10",
  "Completed Today": "bg-app-blue/10",
  "Today's Earnings": "bg-app-green/10",
  Rating: "bg-app-orange/10",
};

export interface StatusItem {
  id: number;
  icon: React.ReactNode;
  name: string;
  value: number;
  bgColor: string;
}

interface StatusItemProps {
  status: StatusItem;
}

interface StatusProps {
  status: StatusProp[];
  isLoading?: boolean;
}

const StatusComponent = ({ status }: StatusItemProps) => {
  return (
    <div className="w-full min-h-33.75 px-6 py-5.25 bg-white rounded-md flex flex-col items-start gap-1.25 shadow-md">
      <div className={`rounded-md p-2 ${status.bgColor}`}>{status.icon}</div>
      {status.name == "Today's Earnings" ? (
        <div className="pl-2 flex items-center justify-center gap-1">
          <Naira size={22} className="text-[#212121]" />
          <h3 className="text-xl font-bold">{formatNumber(status.value)}</h3>
        </div>
      ) : (
        <h3 className="text-xl font-bold pl-2">{formatNumber(status.value)}</h3>
      )}

      <p className="text-lg text-[#212121D9]/85 pl-2">{status.name}</p>
    </div>
  );
};

const Status = ({ status, isLoading }: StatusProps) => {
  const statusValues: StatusItem[] = status.map((item, index) => ({
    id: index + 1,
    icon: iconMap[item.name] ?? (
      <Package size={24} className="text-app-orange" />
    ),
    name: item.name,
    value: item.value,
    bgColor: bgColorMap[item.name] ?? "bg-app-orange/10",
  }));

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2.25">
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-33.75 rounded-md shadow-md bg-black/30"
            />
          ))
        : statusValues.map((item) => (
            <StatusComponent key={item.id} status={item} />
          ))}
    </div>
  );
};

export default Status;
