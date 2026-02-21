import { logger } from "@/utils";
import { AdminApp } from "./admin";
import { RiderApp } from "./riders";
import { CustomerApp } from "./customers";
export type UserRole = "admin" | "rider" | "user";

const componentMap: Record<UserRole, React.FC> = {
  admin: AdminApp,
  rider: RiderApp,
  user: CustomerApp,
};

const Manage = ({ user }: { user: UserRole | null }) => {
  logger.log("Manage", `Manage Users for ${user}`);

  if (!user) {
    return <div>Loading...</div>;
  }

  const Component = componentMap[user];
  return <Component />;
};

export default Manage;
