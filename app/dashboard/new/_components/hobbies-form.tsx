"use client";

import { FaRunning } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { PiMicrophoneStage } from "react-icons/pi";
import { IoIosFootball } from "react-icons/io";
import EditIcon from "./icons/edit-icon";

const HobbiesForm = () => {
  return (
    <div className="relative group py-1">
      <div className="rounded-xl bg-clip-padding backdrop-filter  backdrop-blur-md saturate-50 backdrop-contrast-75 px-4 py-2 w-fit">
        <h5 className="text-xl text-white">Hobbies</h5>
      </div>
      <div className="flex gap-y-2 gap-x-5 justify-between mt-3 px-1">
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
      </div>
      {/* Edit Button */}
      <button className="absolute inset-0 bg-black bg-opacity-25 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
        <EditIcon />
      </button>
    </div>
  );
};

export default HobbiesForm;
