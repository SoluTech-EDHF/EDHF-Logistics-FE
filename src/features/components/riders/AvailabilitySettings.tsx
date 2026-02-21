import { useState } from "react";
import { Switch } from "@/components/common/Switch";
import { TimeInput } from "@/components/common/TimeInput";

interface DaySchedule {
  day: string;
  enabled: boolean;
  start: string;
  end: string;
}

const AvailabilitySettings = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: "Monday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Tuesday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Wednesday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Thursday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Friday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Saturday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Sunday", enabled: true, start: "09:00", end: "18:00" },
  ]);

  const updateDay = (index: number, updates: Partial<DaySchedule>) => {
    const newSchedule = [...schedule];
    newSchedule[index] = { ...newSchedule[index], ...updates };
    setSchedule(newSchedule);
  };
  return (
    <div className="mb-7.5 bg-white border border-[#808080]/3 pl-7.5 pr-8.25 pt-8.75 pb-5.25 shadow-md flex justify-center items-center rounded-md">
      <div className="flex flex-col w-full gap-4.75">
        <div className="flex flex-col gap-3.75 border-b border-[#808080]/50 pb-5.25">
          <div className="flex flex-col">
            <h3 className="text-[26px] font-normal text-[#212121]">
              Availability Status
            </h3>
            <p className="text-lg font-normal text-[#212121]/85">
              Manage your working hours and availability
            </p>
          </div>
          <div
            className={`flex justify-center items-center ${isAvailable ? "bg-app-green/20 border-app-green" : "bg-red-500/20 border-red-500"} border  rounded-[7px] w-full px-5.25 py-3.75 min-h-20.25`}
          >
            <div className="flex justify-between w-full h-full">
              <div className="flex items-center gap-2.25">
                <div
                  className={`w-5 h-5 ${isAvailable ? "bg-app-green" : "bg-red-500"} rounded-full`}
                ></div>
                <div className="flex flex-col">
                  <h3 className="text-[26px] font-normal text-[#212121]">
                    {isAvailable
                      ? "Available for Deliveries"
                      : "Not Available for Deliveries"}
                  </h3>
                  <p className="text-lg font-normal text-[#212121]/85">
                    {isAvailable
                      ? "You are currently accepting new Deliveries"
                      : "You are not accepting new Deliveries"}
                  </p>
                </div>
              </div>
              <Switch
                id="availability-switch"
                checked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
              />
            </div>
          </div>
        </div>
        <div className="space-y-6.5">
          <h3 className="text-[26px] font-normal text-[#212121]">
            Working Hours
          </h3>
          {schedule.map((item, index) => (
            <div
              key={item.day}
              className="flex items-center justify-between min-h-11.25"
            >
              <h3 className="text-[26px] font-normal text-[#212121]">
                {item.day}
              </h3>
              <div className="flex items-center space-x-4">
                {item.enabled ? (
                  <div className="flex items-center space-x-2 animate-fadeIn">
                    <TimeInput
                      value={item.start}
                      onChange={(val) => updateDay(index, { start: val })}
                    />
                    <span className="text-[#212121]/50 text-lg">to</span>
                    <TimeInput
                      value={item.end}
                      onChange={(val) => updateDay(index, { end: val })}
                    />
                  </div>
                ) : (
                  <span className="text-[#212121]/50 text-lg italic pr-12">
                    Closed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySettings;
