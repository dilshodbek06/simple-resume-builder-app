"use client";

import {
  FaCamera,
  FaGamepad,
  FaMapPin,
  FaPalette,
  FaRunning,
  FaSeedling,
  FaUtensils,
} from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { PiMicrophoneStage } from "react-icons/pi";
import { IoIosFootball } from "react-icons/io";
import EditIcon from "./icons/edit-icon";
import { Hobby, Resume } from "@prisma/client";
import { useState } from "react";
import HobbiesModal from "./modals/hobbies-modal";

import HobbyItem from "./hobby-item";
import { IconType } from "react-icons/lib";

interface HobbiesFormProps {
  resume: Resume & {
    hobbies: Hobby[];
  };
}

type HobbyType =
  | "Reading"
  | "Dance"
  | "Singing"
  | "Football"
  | "Cooking"
  | "Photography"
  | "Traveling"
  | "Gaming"
  | "Gardening"
  | "Painting";

const HobbiesForm = ({ resume }: HobbiesFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Corrected iconMap
  const iconMap: Record<HobbyType, IconType> = {
    Reading: GiBookmarklet,
    Dance: FaRunning,
    Singing: PiMicrophoneStage,
    Football: IoIosFootball,
    Cooking: FaUtensils,
    Photography: FaCamera,
    Traveling: FaMapPin,
    Gaming: FaGamepad,
    Gardening: FaSeedling,
    Painting: FaPalette,
  };

  return (
    <div className="relative group py-1">
      <div className="rounded-xl bg-clip-padding backdrop-filter  backdrop-blur-md saturate-50 backdrop-contrast-75 px-4 py-2 w-fit">
        <h5 className="text-xl text-white">Hobbies</h5>
      </div>
      <div className="grid grid-cols-4  gap-y-3 gap-x-5 justify-between mt-3 px-1">
        {resume.hobbies.length > 0 ? (
          resume.hobbies.map((item, ind) => (
            <HobbyItem
              key={ind}
              icon={iconMap[item.name as HobbyType]}
              title={item.name}
            />
          ))
        ) : (
          <>
            <div className=" flex flex-col items-center">
              <GiBookmarklet className="text-3xl text-white" />
              <p className="text-white">Reading</p>
            </div>
            <div className=" flex flex-col items-center">
              <FaRunning className="text-3xl text-white" />
              <p className="text-white">Dance</p>
            </div>
            <div className=" flex flex-col items-center">
              <PiMicrophoneStage className="text-3xl text-white" />
              <p className="text-white">Singing</p>
            </div>
            <div className=" flex flex-col items-center">
              <IoIosFootball className="text-3xl text-white" />
              <p className="text-white">Football</p>
            </div>
          </>
        )}
      </div>
      {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 bg-black bg-opacity-25 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center "
      >
        <EditIcon />
      </button>
      <HobbiesModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
      />
    </div>
  );
};

export default HobbiesForm;
