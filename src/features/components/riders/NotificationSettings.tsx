import { Switch } from "@/components/common/Switch";
import { useEffect, useState } from "react";

interface NotificationComponentProp {
  id: number;
  title: string;
  body: string;
  notificationStatus: boolean;
  isTitle: boolean;
}

const NotificationComponent = ({
  notications,
}: {
  notications: NotificationComponentProp;
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(
    notications.notificationStatus,
  );
  return (
    <div
      className={`w-full min-h-22 ${notications.isTitle ? "" : "not-last:border-b"} border-b-[#212121]/85 pl-10.5 pr-9.5 flex justify-between items-start`}
    >
      <div className="flex flex-col">
        <h3 className="text-[26px] font-normal text-[#212121]">
          {notications.title}
        </h3>
        <p className="text-lg font-normal text-[#212121]/85">
          {notications.body}
        </p>
      </div>
      {notications.isTitle ? null : (
        <div className="flex">
          <Switch
            id={`notification-${notications.id}`}
            checked={isEnabled}
            onChange={(val) => setIsEnabled(val)}
          />
        </div>
      )}
    </div>
  );
};

const NotificationSettings = () => {
  const [noticationSetting, setnoticationSetting] = useState<
    NotificationComponentProp[] | []
  >([]);

  useEffect(() => {
    setTimeout(() => {
      setnoticationSetting([
        {
          id: 1,
          title: "Notifications Preferences",
          body: "Choose what notifications you want to receive",
          notificationStatus: false,
          isTitle: true,
        },
        {
          id: 2,
          title: "New Deliveries Alert",
          body: "Get notified when new delivery packages are available",
          notificationStatus: true,
          isTitle: false,
        },
        {
          id: 3,
          title: "Delivery Updates",
          body: "Updates about your ongoing deliveries",
          notificationStatus: true,
          isTitle: false,
        },
        {
          id: 4,
          title: "Messages",
          body: "Messages from customers",
          notificationStatus: true,
          isTitle: false,
        },
        {
          id: 5,
          title: "Promotions & Bonuses",
          body: "Special offers and  earning opportunities",
          notificationStatus: false,
          isTitle: false,
        },
        {
          id: 6,
          title: "Email Notifications",
          body: "Receive notification via email",
          notificationStatus: true,
          isTitle: false,
        },
      ]);
    }, 100);
  }, []);

  return (
    <div className="mb-7.5 bg-white border border-[#808080]/3 pl-4.5 pt-10.5 pb-13.5 shadow-md flex justify-end rounded-md">
      <div className="flex pr-9.5 w-full flex-col gap-6.5">
        {noticationSetting?.map((notications) => (
          <NotificationComponent
            key={notications.id}
            notications={notications}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
