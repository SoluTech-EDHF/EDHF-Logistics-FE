import { Package } from "@/components/icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [image, setImage] = useState<string>("");
  const [riderName, setRiderName] = useState<string>("John Anderson");
  useEffect(() => {
    setTimeout(() => {
      setImage("");

      setRiderName("John Anderson");
    }, 1000);
  }, []);

  // const riderInitials = riderName ? riderName.substring(0, 2).toUpperCase() : "NA";
  const riderInitials = riderName
    ? riderName
        .split(" ")
        .map((name) => name[0])
        .join("")
    : "NA";
  return (
    <header className="w-full h-26 bg-white shadow-md flex items-end justify-center pt-8 pb-4">
      <div className="w-9/10 h-full flex items-center justify-between">
        <div className="flex justify-between items-center h-full gap-2.5">
          <div className="flex justify-center items-center h-8 w-9 bg-rider-blue rounded-sm">
            <Package size={20} className="text-white" />
          </div>
          <span className="text-[22px] font-bold">Rider Dashboard</span>
        </div>

        <div className="flex items-center justify-baseline gap-1.5">
          <div className="flex flex-col items-start justify-center">
            <p id="rider-name" className="font-medium text-lg">
              {riderName || "John Anderson"}
            </p>
            <p id="rider-id" className="text-lg">
              Rider ID: EGS-234576{" "}
            </p>
          </div>

          <div className="flex">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-13.5 h-13.5 rounded-full"
              />
            ) : (
              <span className="w-13.5 h-13.5 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">
                  {riderInitials}
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
