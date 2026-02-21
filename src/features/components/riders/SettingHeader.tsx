import { Button } from "@/components/common/button/button";

const SettingHeader = ({
  settingSession,
  setsettingSession,
}: {
  settingSession: "notification" | "availability";
  setsettingSession: (session: "notification" | "availability") => void;
}) => {
  return (
    <div className="w-full flex justify-between gap-16 items-center">
      <Button
        className={`bg-transparent hover:bg-transparent text-[22px] ${settingSession === "notification" ? "text-app-blue" : "text-[#212121] hover:text-app-blue/70"}`}
        onClick={() => setsettingSession("notification")}
      >
        Notifications
      </Button>
      <Button
        className={`bg-transparent hover:bg-transparent text-[22px] ${settingSession === "availability" ? "text-app-blue" : "text-[#212121] hover:text-app-blue/70"}`}
        onClick={() => setsettingSession("availability")}
      >
        Availability
      </Button>
    </div>
  );
};

export default SettingHeader;
