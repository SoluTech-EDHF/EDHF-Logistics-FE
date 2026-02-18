import { logger } from "@/utils";
import { AdminApp } from "./admin";
import { RiderApp } from "./riders";
import { CustomerApp } from "./customers";
type UserRole = "Admin" | "Rider" | "User";

const componentMap: Record<UserRole, React.FC> = {
  Admin: AdminApp,
  Rider: RiderApp,
  User: CustomerApp,
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
