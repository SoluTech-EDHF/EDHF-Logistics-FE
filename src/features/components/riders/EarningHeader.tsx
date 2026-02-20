import { Button } from "@/components/common/button/button";
import { BiExport } from "react-icons/bi";

const EarningHeader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h3 className="text-2xl font-bold">Earnings</h3>
      <Button
        className="px-5.75 py-2.75 rounded-[5px] h-12"
        disabled={isLoading}
      >
        <BiExport />
        Export
      </Button>
    </div>
  );
};

export default EarningHeader;
