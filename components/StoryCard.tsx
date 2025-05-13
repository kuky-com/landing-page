"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import dayjs from 'dayjs';
import { useSelector } from "react-redux";
import React from "react";

interface Journey {
  name: string;
}

interface Story {
  avatar?: string;
  full_name: string;
  referral_id?: string;
  birthday?: string;
  online_status?: string;
  last_active_time?: string;
  journey?: Journey;
}

interface StoryCardProps {
  story: Story;
  variant?: "primary" | "secondary";
  column?: number;
  blurImage?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({
  story,
  variant = "primary",
  column,
  blurImage
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (story.referral_id) {
      router.push(`https://app.kuky.com/profile/${story.referral_id}`);
    }
  };
const calculateAge = (birthday: any) => {
  if (!birthday) return "N/A"; // Handle missing data

  // Normalize date format to always use "-"
  const normalizedBirthday = birthday.replace(/\//g, "-");

  const [day, month, year] = normalizedBirthday.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--; // Adjust if the birthday hasn't occurred yet this year
  }

  return age;
};
const makeTag = (name: string)=>{
    const chars = name?.split(' ')?.map(word => word.charAt(0));
    return chars?.join('').toUpperCase();
}
  const convertToInitials = (name: string): string => {
    if (!name) return "";
    const parts = name.trim().split(" ");
    return parts
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase() || "")
      .join(".");
  };
    
const OnlineStatus: React.FC<{ status?: string; last_active_time?: string }> = ({ status = 'offline', last_active_time }) => {
  const isRecentOnline = last_active_time
    ? dayjs().diff(dayjs(last_active_time), 'minute') < 60
    : false;
  let label = 'Offline';
  let backgroundColor = '#A7A7A7';

  if (status?.toLowerCase() === 'away') {
    label = 'Away';
    backgroundColor = '#FFD322';
  } else if (status?.toLowerCase() === 'active' && isRecentOnline) {
    label = 'Active';
    backgroundColor = '#2EE62A';
  }
  return (
    <div
      style={{
        backgroundColor,
        height: 14,
        borderRadius: 7,
        padding: '8px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 500, color: 'black' }}>
        {label}
      </span>
    </div>
  );
};
    

  const isOneColumn = column === 1;
  const isSecondColumn = column === 2;
  const isSecondary = variant === "secondary";

  return (
    <div
      className={`relative rounded-[15px] overflow-hidden shadow-md ${
        isSecondary
          ? "bg-gray-50 border-[3px] border-white mt-4"
          : "bg-gray-50 border-[3px] border-[#725ED4] mt-4"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`w-full ${
          isSecondary ? "md:h-80 sm:h-[300px] h-[300px]" : "h-[344px]"
        } rounded-[15px] bg-cover bg-center flex justify-center items-center`}
        style={{
          backgroundImage: story.avatar ? `url("${story.avatar}")` : "none",
          backgroundColor: !story.avatar ? "#f3f4f6" : "transparent",
        }}
      >
        {story.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={story.avatar}
            alt="User Avatar"
            className="w-full h-full object-cover rounded-[10px]"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-[5rem] font-bold text-gray-900 text-center">
              {makeTag(story.full_name)}
            </p>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full">
        <div className={`${isSecondary ? "pt-10 pb-3 px-3" : "p-4"} relative`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black" />
          {isSecondColumn ? (
            <>
              <div className="text-white sm:text-[16px] text-[14px] font-semibold relative z-1 items-center sm:hidden">
                <div className="items-center w-full">
                  <span>{story.full_name} </span>
                </div>
                <div className="flex justify-between items-center w-full">
                  {calculateAge(story.birthday) !== "N/A" && (
                    <span>{`${calculateAge(story.birthday)} yo`}</span>
                  )}
                  <OnlineStatus
                    status={story.online_status || ""}
                    last_active_time={story.last_active_time || ""}
                  />
                </div>
              </div>
              <div className="text-white sm:text-[16px] text-[14px] font-semibold relative z-1 flex items-center gap-2 hidden sm:flex">
                {story.full_name}
                {calculateAge(story.birthday) !== "N/A"
                  ? `${calculateAge(story.birthday)} yo`
                  : ""}
                <OnlineStatus
                  status={story.online_status || ""}
                  last_active_time={story.last_active_time || ""}
                />
              </div>
            </>
          ) : (
            <div className="text-white sm:text-[16px] text-[14px] font-semibold relative z-1 flex items-center gap-2">
              {story.full_name}
              {calculateAge(story.birthday) !== "N/A"
                ? `${calculateAge(story.birthday)} yo`
                : ""}
              <OnlineStatus
                status={story.online_status || ""}
                last_active_time={story.last_active_time || ""}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className={`absolute top-2 right-2 ${
          isSecondary
            ? "bg-[rgba(123,101,232,0.85)] text-[#E8FF58] ml-2 px-4 py-2 text-[10px]"
            : "bg-[#725ED4] w-10 h-8 flex items-center justify-center"
        } rounded-[20px] text-center`}
      >
        {isSecondary ? (
          story?.journey?.name
        ) : (
          <Image
            width={15}
            height={5}
            src="/arrow-yellow.png"
            alt="arrow icon"
          />
        )}
      </div>
    </div>
  );
};

export default StoryCard;
