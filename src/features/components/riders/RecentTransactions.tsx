import { Skeleton } from "@/components/common/skeleton";
import { Naira } from "@/components/icons";
import { formatNumber } from "@/utils";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface TransactionCompProp {
  id: number;
  transactionType: string;
  transactionAmount: number;
  transactionStatus: "Completed" | "Paid";
  transactionDate: string;
}

const RecentTransaction = ({
  transaction,
}: {
  transaction: TransactionCompProp;
}) => {
  return (
    <div className="w-full not-last:border-b border-b-[#212121]/85 min-h-24.25 pl-7.5 sm:pr-10 py-4.5 flex justify-start items-center gap-4.5 overflow-x-auto [scrollbar-width:none]">
      <div
        className={`rounded-md p-2 ${transaction.transactionStatus === "Paid" ? "bg-app-blue/10" : "bg-app-green/10"}`}
      >
        <Naira
          size={24}
          className={`${transaction.transactionStatus === "Paid" ? "text-app-blue" : "text-app-green"}`}
        />
      </div>
      <div className="flex justify-between items-center w-full gap-10">
        <div className="flex flex-col gap-2.5 min-w-35.25">
          <p className="text-[#212121] text-xl font-normal">
            {transaction.transactionType}
          </p>
          <div className="flex items-center gap-1">
            <Calendar size={13} /> {transaction.transactionDate}
          </div>
        </div>
        <div className="flex flex-col gap-2.5 min-w-35.25">
          <div className="flex items-center">
            <Naira size={24} />
            <p className="text-[#212121] text-lg font-medium">
              {formatNumber(transaction.transactionAmount)}
            </p>
          </div>
          <p
            className={`${transaction.transactionStatus === "Paid" ? "text-app-blue" : "text-app-green"} text-lg font-medium`}
          >
            {transaction.transactionStatus}
          </p>
        </div>
      </div>
    </div>
  );
};

const RecentTransactions = ({ isLoading }: { isLoading: boolean }) => {
  const [transactions, setTransactions] = useState<TransactionCompProp[] | []>(
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setTransactions([
        {
          id: 1,
          transactionType: "Daily Earnings",
          transactionAmount: 20000.0,
          transactionStatus: "Completed",
          transactionDate: "Feb 16, 2026",
        },
        {
          id: 2,
          transactionType: "Daily Earnings",
          transactionAmount: 40000.0,
          transactionStatus: "Completed",
          transactionDate: "Feb 15, 2026",
        },
        {
          id: 3,
          transactionType: "Daily Earnings",
          transactionAmount: 20000.0,
          transactionStatus: "Completed",
          transactionDate: "Feb 16, 2026",
        },
        {
          id: 4,
          transactionType: "Monthly Payout",
          transactionAmount: 150000.0,
          transactionStatus: "Paid",
          transactionDate: "Feb 8, 2026",
        },
      ]);
    }, 500);
  }, []);
  return (
    <div className="mb-7.5 bg-white rounded-t-md shadow-md">
      <div className="pl-7.5 min-h-24.25 rounded-t-md not-last:border-b border-b-[#212121]/85 flex items-center">
        <h3 className="text-2xl font-bold">Recent Transactions</h3>
      </div>
      {isLoading
        ? [1, 2, 3, 4].map((_, index) => (
            <Skeleton
              key={index}
              className="min-h-24.25 bg-black/30 rounded-none not-last:border-b border-b-[#212121]/85"
            />
          ))
        : transactions.map((transaction) => (
            <RecentTransaction key={transaction.id} transaction={transaction} />
          ))}
    </div>
  );
};

export default RecentTransactions;
