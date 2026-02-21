import { Skeleton } from "@/components/common/skeleton";
import { useEffect, useState } from "react";

const numberToWords = (n: number): string => {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];
  return words[n] ?? String(n);
};

const Greeting = ({
  isLoading,
  activeDeliveries = 0,
}: {
  isLoading?: boolean;
  activeDeliveries?: number;
}) => {
  const [riderName, setRiderName] = useState<string>("John Anderson");
  useEffect(() => {
    setTimeout(() => {
      setRiderName("John Anderson");
    }, 1000);
  }, []);
  const riderInitials = riderName ? riderName.split(" ")[0] : "RIDER";

  if (isLoading) {
    return <Skeleton className="min-h-34.5 w-full rounded-md bg-black/30" />;
  }

  return (
    <div className="bg-app-blue min-h-34.5 w-full rounded-md flex flex-col justify-center p-5.5 text-white gap-2.5">
      <h3 className="font-bold text-2xl">Welcome back, {riderInitials}!</h3>
      <p className="text-lg font-normal">
        You have {numberToWords(activeDeliveries)} active{" "}
        {activeDeliveries === 1 ? "delivery" : "deliveries"} today
      </p>
    </div>
  );
};

export default Greeting;
