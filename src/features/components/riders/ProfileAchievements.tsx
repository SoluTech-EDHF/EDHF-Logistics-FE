import { Skeleton } from "@/components/common/skeleton";
import Medal from "@/components/icons/Medal";

const ProfileAchievements = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className="mb-7.5 w-full min-h-66.75 bg-white shadow-md rounded-md flex flex-col justify-center gap-7 pl-4.5 pr-7.25">
      <h3 className="text-2xl font-bold">Achievements</h3>
      <div className="grid grid-cols-4 gap-2.5">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-full min-h-29.25 rounded-md bg-black/30"
              />
            ))
          : [
              "Top Performer",
              "Speed Master",
              "100 Deliveries",
              "Perfect Week",
            ].map((achievement, index) => (
              <div
                key={index}
                className="w-full min-h-29.25 bg-app-blue/5  rounded-md flex flex-col items-center justify-center gap-3.75"
              >
                <Medal size={32} className="text-app-blue" />
                <p className="text-xl font-medium text-app-blue">
                  {achievement}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProfileAchievements;
