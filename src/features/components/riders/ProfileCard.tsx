const ProfileCard = ({ isLoading }: { isLoading: boolean }) => {
  console.log("ProfileCard isLoading:", isLoading);
  return (
    <div className="w-full flex flex-col gap-6.25 ">
      <h3 className="text-2xl font-bold">Profile</h3>
      <div className="w-full min-h-47.25 bg-white shadow-md rounded-md"></div>
    </div>
  );
};

export default ProfileCard;
