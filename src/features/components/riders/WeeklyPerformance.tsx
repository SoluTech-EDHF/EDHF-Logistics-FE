import { useEffect, useState } from "react";
import { formatNumber } from "@/utils";
import { Naira } from "@/components/icons";
import { Skeleton } from "@/components/common/skeleton";

interface WeeklyPerformanceVals {
  id: number;
  name: string;
  value: number;
}
const WeeklyPerformance = ({ isLoading }: { isLoading?: boolean }) => {
  const [weeklyValues, setweeklyValues] = useState<
    WeeklyPerformanceVals[] | []
  >([]);
  const [weeklyRange, setweeklyRange] = useState<WeeklyPerformanceVals[]>([
    { id: 1, name: "On-Time", value: 0 },
    { id: 2, name: "Success Rate", value: 0 },
  ]);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setweeklyValues([
          { id: 1, name: "Completed this week", value: 3 },
          { id: 2, name: "Weekly earnings", value: 80000 },
        ]);
        setweeklyRange([
          { id: 1, name: "On-Time Deliveries", value: 30 },
          { id: 2, name: "Success Rate", value: 80 },
        ]);
      }, 200);
    }
  }, [isLoading]);

  return (
    <div className="bg-white w-full min-h-94.25 mb-7.5 p-6.5 rounded-md flex flex-col gap-7 justify-between">
      <h3 className="font-bold text-xl text-[#212121]">Weekly Performance</h3>
      <div className="flex flex-col gap-7.5">
        {isLoading ? (
          <Skeleton className="min-h-32.5 w-full rounded-md bg-black/30" />
        ) : (
          weeklyRange.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h3 className="text-lg font-normal text-[#212121]/85">
                  {item.name}
                </h3>
                <h3 className="text-lg font-medium text-[#212121]">
                  {item.value}%
                </h3>
              </div>
              <div className="w-full bg-[#808080]/50 rounded-lg h-3.75 overflow-hidden">
                <div
                  style={{ width: `${item.value}%` }}
                  className={`h-full ${item.name === "On-Time Deliveries" ? "bg-app-green" : "bg-app-blue"} rounded-lg transition-[width] duration-2000 ease-in-out`}
                ></div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between w-full gap-3.75 h-auto">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <Skeleton
                key={index}
                className="min-h-27.25 w-full rounded-md bg-black/30"
              />
            ))
          : weeklyValues.map((item) => (
              <div
                key={item.id}
                className="h-27.25 w-full flex flex-col items-center justify-center gap-0.5 bg-[#808080]/3 rounded-md"
              >
                {item.name === "Weekly earnings" ? (
                  <div className="flex items-center justify-center">
                    <Naira size={38} className="text-[#212121]" />
                    <p className="font-bold text-xl">
                      {formatNumber(item.value)}
                    </p>
                  </div>
                ) : (
                  <p className="font-bold text-xl">
                    {formatNumber(item.value)}
                  </p>
                )}
                <h4 className="font-normal text-lg text-[#212121]/85">
                  {item.name}
                </h4>
              </div>
            ))}
      </div>
    </div>
  );
};

export default WeeklyPerformance;
