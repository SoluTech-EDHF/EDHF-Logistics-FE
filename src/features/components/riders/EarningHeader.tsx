import { Button } from "@/components/common/button/button";
import { Export } from "@/components/icons";

const EarningHeader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h3 className="text-2xl font-bold">Earnings</h3>
      <Button
        className="px-5.75 py-2.75 rounded-[5px] h-12 items-center"
        disabled={isLoading}
      >
        <Export size={16} />
        Export
      </Button>
    </div>
  );
};

export default EarningHeader;
