const HistoryHeader = ({
  completedDeliveries,
}: {
  completedDeliveries: number;
}) => {
  return (
    <div className="space-y-4.75">
      <h3 className="font-bold text-[32px]"> Delivery History</h3>
      <p className="text-xl font-normal">
        {completedDeliveries ? completedDeliveries : 0} completed{" "}
        {completedDeliveries > 1 ? "deliveries" : "delivery"}
      </p>
    </div>
  );
};

export default HistoryHeader;
