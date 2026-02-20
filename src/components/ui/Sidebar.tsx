import { useAppStore } from "@/store";
import Logo from "../../assets/LOGO (2).png";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Bike,
  History,
  LayoutDashboard,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";
import { BarChart, Logout, MoneyBag, Notification, Package } from "../icons";
import { Button } from "../common/button/button";
import { Skeleton } from "../common/skeleton";

interface valueProp {
  id: number;
  name: string;
  location: string;
  icon: React.ReactNode;
}

interface siderBarRouteProp {
  user: string;
  values: valueProp[];
}
const Sidebar = () => {
  const {
    isLoading,
    typeOfUser,
    logout,
    dashboardSession,
    setDashboardSession,
  } = useAppStore();
  const [userType, setUserType] = useState(typeOfUser || "default");
  //   const userType: string = ;
  const [isOpen, setIsOpen] = useState(false);
  // console.log(userType);
  // console.log(isLoading);
  // console.log(typeOfUser);
  const pageRoute = useLocation().pathname;
  const navigate = useNavigate();
  //   console.log(pageRoute);

  useEffect(() => {
    if (typeOfUser) {
      setTimeout(() => {
        setUserType(typeOfUser);
      }, 2000);
    }
  }, [typeOfUser]);

  const sideBars: siderBarRouteProp[] = [
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
      user: "rider",
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
          location: "/app/rider/earnings",
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
          name: "Pickup & Delivery",
          location: "/app/manage/pickup-delivery",
          icon: <Package size={24} />,
        },
        {
          id: 3,
          name: "Drivers",
          location: "/app/manage/drivers",
          icon: <Bike size={24} />,
        },
        {
          id: 4,
          name: "Customers",
          location: "/app/manage/customers",
          icon: <Users size={24} />,
        },
        {
          id: 5,
          name: "Analytics",
          location: "/app/manage/analytics",
          icon: <BarChart size={24} />,
        },
        {
          id: 6,
          name: "Settings",
          location: "/app/settings",
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

  const handleSidebarClick = (name: string, location: string) => {
    routeTo(location);
    if (name === "Dashboard") {
      if (dashboardSession == "profile") {
        setDashboardSession("home");
      }
    }
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
                    className={`w-full text-lg h-6 flex justify-start items-center gap-2 px-2! py-0! rounded-sm ${pageRoute === val.location ? "hover:bg-sidebar-active-text/5 bg-sidebar-active-text/5 text-sidebar-active-text h-12" : "bg-transparent hover:bg-sidebar-active-text/5 hover:text-sidebar-active-text hover:h-11 transition-[height]"}`}
                    onClick={() => handleSidebarClick(val.name, val.location)}
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
          <Button
            className="text-lg flex justify-start items-center gap-2 px-2! py-0! w-full rounded-sm bg-transparent hover:text-red-500 hover:bg-transparent"
            onClick={logout}
          >
            <Logout size={24} className="hover:text-red-500" />
            <span>Logout</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
