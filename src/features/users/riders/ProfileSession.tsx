import {
  ProfileAchievements,
  ProfileCard,
  ProfileStatus,
} from "@/features/components/riders";
import { useAppStore } from "@/store";
import { useEffect, useState } from "react";

const ProfileSession = () => {
  const { isLoading } = useAppStore();
  const [appLoading, setappLoading] = useState(true);
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setappLoading(false);
      }, 1000);
    }
  }, [isLoading]);
  return (
    <div className="sm:px-10 mt-7 max-sm:w-9/10 w-full flex flex-col gap-10.5 overflow-y-auto [scrollbar-width:none]">
      <ProfileCard isLoading={appLoading} />
      <ProfileStatus isLoading={appLoading} />
      <ProfileAchievements isLoading={appLoading} />
    </div>
  );
};

export default ProfileSession;
