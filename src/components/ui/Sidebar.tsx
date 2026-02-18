import { useAppStore } from "@/store";
import Logo from "../../assets/LOGO (2).png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Bike,
  History,
  LayoutDashboard,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { Logout, MoneyBag, Notification } from "../icons";
import { Button } from "../common/button/button";
import { Skeleton } from "../common/skeleton";
const Sidebar = () => {
  const { isLoading, typeOfUser } = useAppStore();
  const userType: string = typeOfUser || "default";
  const [isOpen, setIsOpen] = useState(false);
//   console.log(userType);
  const pageRoute = useLocation().pathname;
  const navigate = useNavigate();
//   console.log(pageRoute);

  const sideBars = [
    {
      user: "default",
      values: [
        {
          id: 1,
          name: "Dashboard",
          location: "/app",
          icon: <LayoutDashboard size={24} />,
        },
        {
          id: 2,
          name: "Settings",
          location: "/app/settings",
          icon: <Settings size={24} />,
        },
      ],
    },
    {
      user: "user",
      values: [
        {
          id: 1,
          name: "Dashboard",
          location: "/app",
          icon: <LayoutDashboard size={24} />,
        },
        {
          id: 2,
          name: "Dispatch",
          location: "/app/dispatch",
          icon: <Bike size={24} />,
        },
        {
          id: 3,
          name: "Notifications",
          location: "/app/notification",
          icon: <Notification size={24} />,
        },
        {
          id: 4,
          name: "Settings",
          location: "/app/settings",
          icon: <Settings size={24} />,
        },
      ],
    },
    {
      user: "riders",
      values: [
        {
          id: 1,
          name: "Dashboard",
          location: "/app",
          icon: <LayoutDashboard size={24} />,
        },
        {
          id: 2,
          name: "Active Deliveries",
          location: "/app/active-deliveries",
          icon: <Bike size={24} />,
        },
        {
          id: 3,
          name: "Earnings",
          location: "/app/rider/earning",
          icon: <MoneyBag size={24} />,
        },
        {
          id: 4,
          name: "History",
          location: "/app/rider/history",
          icon: <History size={24} />,
        },
        {
          id: 5,
          name: "Settings",
          location: "/app/settings",
          icon: <Settings size={24} />,
        },
      ],
    },
    {
      user: "admin",
      values: [
        {
          id: 1,
          name: "Dashboard",
          location: "/app",
          icon: <LayoutDashboard size={24} />,
        },
        {
          id: 2,
          name: "Settings",
          location: "/app/manage/settings",
          icon: <Settings size={24} />,
        },
      ],
    },
  ];

  const sidebarVal =
    sideBars.filter(
      (name) => name.user.toLowerCase() === userType?.toLowerCase(),
    ) || sideBars;

//   console.log(sideBars);
//   console.log(sidebarVal);

  const routeTo = (location: string) => {
    navigate(location);
  };
  return (
    <div
      className={`bg-sidebar-primary h-screen min-w-2xs md:min-w-88 max-sm:absolute max-sm:z-50 flex justify-center items-center transition-transform duration-300 ${isOpen ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"}`}
    >
      <button
        className={`absolute top-4 z-50 sm:hidden bg-sidebar-primary rounded-r-md cursor-pointer duration-500 p-2 text-white ${isOpen ? "right-0" : "-right-12"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <div
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </button>
      <div className="w-6/10 h-10/12 flex flex-col justify-between items-center text-white">
        <div className="flex flex-col gap-19 w-full flex-1 min-h-0">
          <img src={Logo} alt="Logistics logo" className="max-w-full" />
          <div className="flex flex-col gap-11 overflow-y-auto flex-1 min-h-0 [scrollbar-width:none]">
            {isLoading
              ? sideBars[0].values.map((name) => (
                  <Skeleton key={name.id} className="w-full h-12 rounded-sm" />
                ))
              : sidebarVal[0]?.values?.map((val) => (
                  <Button
                    key={val.id}
                    className={`w-full text-lg h-6 flex justify-start items-center gap-2 px-2! py-0! rounded-sm ${pageRoute === val.location ? "bg-(--sidebar-active-text)/5 text-(--sidebar-active-text) h-12" : "bg-transparent hover:bg-(--sidebar-active-text)/5 hover:text-(--sidebar-active-text) hover:h-11 transition-[height]"}`}
                    onClick={() => routeTo(val.location)}
                  >
                    {val.icon}
                    {val.name}
                  </Button>
                ))}
          </div>
        </div>
        {isLoading ? (
          <Skeleton className="w-full h-12 rounded-sm" />
        ) : (
          <Button className="text-lg flex justify-start items-center gap-2 px-2! py-0! w-full rounded-sm bg-transparent hover:text-red-500 hover:bg-transparent">
            <Logout size={24} className="hover:text-red-500" />
            <span>Logout</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
