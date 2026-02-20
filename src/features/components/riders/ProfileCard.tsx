import { Button } from "@/components/common/button/button";
import { Skeleton } from "@/components/common/skeleton";
import { Phone } from "@/components/icons";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";

const ProfileCard = ({ isLoading }: { isLoading: boolean }) => {
  const [image, setImage] = useState<string>("");
  const [riderName, setRiderName] = useState<string>("John Anderson");
  useEffect(() => {
    setTimeout(() => {
      setImage("");

      setRiderName("John Anderson");
    }, 1000);
  }, []);
  const riderInitials = riderName
    ? riderName
        .split(" ")
        .map((name) => name[0])
        .join("")
    : "NA";
  return (
    <div className="w-full flex flex-col gap-6.25 ">
      <h3 className="text-2xl font-bold">Profile</h3>
      <div className="w-full min-h-47.25 bg-white shadow-md rounded-md flex justify-center pl-4.75 pr-9.75 pt-8.25">
        <div className="w-full flex justify-between">
          <div className="flex gap-2">
            {isLoading ? (
              <Skeleton className="w-25 h-25 rounded-full bg-black/30" />
            ) : image ? (
              <img
                src={image}
                alt="Profile"
                className="w-25 h-25 rounded-full"
              />
            ) : (
              <span className="w-25 h-25 rounded-full bg-app-blue flex items-center justify-center">
                <span className="text-5xl font-medium text-white">
                  {riderInitials}
                </span>
              </span>
            )}
            <div className="flex flex-col pt-1.5">
              {isLoading ? (
                <>
                  <div className="flex flex-col w-52 gap-1 mb-1">
                    <Skeleton
                      id="rider-name"
                      className=" text-[22px] bg-black/30 w-full"
                    >
                      &nbsp;
                    </Skeleton>
                    <Skeleton id="rider-id" className="text-lg bg-black/30">
                      &nbsp;
                    </Skeleton>
                  </div>
                  <div className="flex justify-between gap-10.5 w-52">
                    <Skeleton
                      id="rider-email"
                      className="inline-flex gap-1 items-center bg-black/30 w-1/2 pl-2"
                    >
                      <Mail size={16} />
                      &nbsp;
                    </Skeleton>
                    <Skeleton
                      id="rider-phone-number"
                      className="inline-flex gap-1 items-center bg-black/30 w-1/2 pl-2"
                    >
                      <Phone size={16} />
                      &nbsp;
                    </Skeleton>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col ">
                    <p id="rider-name" className="font-medium text-[22px]">
                      {riderName || "John Anderson"}
                    </p>
                    <p
                      id="rider-id"
                      className="text-lg text-[#212121]/85 font-normal"
                    >
                      Rider ID: EGS-234576
                    </p>
                  </div>
                  <div className="flex justify-between gap-10.5">
                    <p
                      id="rider-email"
                      className="text-lg text-[#212121]/85 font-normal inline-flex gap-1 items-center"
                    >
                      <Mail size={16} />
                      johnanderson@gmail.com
                    </p>
                    <p
                      id="rider-phone-number"
                      className="text-lg text-[#212121]/85 font-normal inline-flex gap-1 items-center"
                    >
                      <Phone size={16} />
                      +23481263889901
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <Button
            className="px-5.75 py-2.75 rounded-[5px] h-12"
            disabled={isLoading}
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
