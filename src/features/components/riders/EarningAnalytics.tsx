import { Skeleton } from "@/components/common/skeleton";
import { Naira } from "@/components/icons";
import { useEffect, useState } from "react";
import { formartNumber } from "@/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
interface analyticComponentProp {
  id: number;
  name: string;
  value: number;
  deliveries: number;
  analytic: string;
}

const AnalyticsComponents = ({
  analysis,
}: {
  analysis: analyticComponentProp;
}) => {
  return (
    <div className="min-h-36.25 rounded-md shadow-md bg-white flex flex-col justify-between px-3 py-4.25">
      <div className="flex gap-1 items-center">
        <div className="rounded-md p-2 bg-app-green/10">
          <Naira size={24} className="text-app-green" />
        </div>
        <div className="flex flex-col h-full">
          <p className="text-[#212121]/85 text-base font-normal">
            {analysis.name}
          </p>
          <div className="flex items-center">
            <Naira size={24} />
            <p className="text-[#212121] text-lg font-normal">
              {formartNumber(analysis.value)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[#212121]/85 text-lg font-normal">
          {analysis.deliveries}{" "}
          {analysis.deliveries > 1 ? "deliveries" : "delivery"}
        </p>
        <div
          className={`flex items-center ${analysis.analytic.includes("+") ? "text-app-green" : "text-red-500"} font-normal text-base`}
        >
          {analysis.analytic.includes("+") ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          {analysis.analytic}
        </div>
      </div>
    </div>
  );
};

const EarningAnalytics = ({ isLoading }: { isLoading: boolean }) => {
  const [analytics, setAnalytics] = useState<analyticComponentProp[] | []>([]);

  useEffect(() => {
    setTimeout(() => {
      setAnalytics([
        {
          id: 1,
          name: "Today",
          value: 20000,
          deliveries: 5,
          analytic: "+8%",
        },
        {
          id: 2,
          name: "This Week",
          value: 80000,
          deliveries: 32,
          analytic: "+8%",
        },
        {
          id: 3,
          name: "This Month",
          value: 180000,
          deliveries: 128,
          analytic: "+8%",
        },
      ]);
    }, 500);
  }, []);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-7.5">
      {isLoading
        ? [1, 2, 3].map((_, index) => (
            <Skeleton
              className="min-h-36.25 rounded-md shadow-md bg-black/30"
              key={index}
            />
          ))
        : analytics.map((analysis) => (
            <AnalyticsComponents key={analysis.id} analysis={analysis} />
          ))}
    </div>
  );
};

export default EarningAnalytics;
