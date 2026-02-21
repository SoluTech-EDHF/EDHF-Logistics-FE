import { useAppStore } from "@/store/store";
import { AdminSettings } from "./admin";
import { CustomerSettings } from "./customers";
import { RiderSettings } from "./riders";
import { logger } from "@/utils";

const Settings = () => {
  const { typeOfUser } = useAppStore();
  logger.log("Settings", `Settings page for ${typeOfUser} user`);

  if (typeOfUser === "admin") return <AdminSettings />;
  if (typeOfUser === "rider") return <RiderSettings />;
  return <CustomerSettings />;
};

export default Settings;
