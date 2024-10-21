"use client";

import ProgressBar from "@/components/shared/progress-bar";
import EditIcon from "./icons/edit-icon";

const SkillsForm = () => {
  return (
    <div className="relative group">
      <div className="flex items-center">
        <div className="px-4 w-full font-bold flex justify-center items-center py-2 tracking-widest uppercase rounded-lg bg-neutral-700 text-white">
          My Skills
        </div>
        <div className="h-[2px] bg-neutral-700 w-full rounded-md"></div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 ">
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={70}
          name="HTML"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={30}
          name="CSS"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={90}
          name="Javascript"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={90}
          name="Javascript"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={90}
          name="Javascript"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={90}
          name="Javascript"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={90}
          name="Javascript"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={90}
          name="Javascript"
        />
        <ProgressBar
          imgSrc="./images/facebook.svg"
          percentage={90}
          name="Javascript"
        />
      </div>
      {/* Edit Button */}
      <button className="absolute inset-0 bg-black bg-opacity-25 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
        <EditIcon />
      </button>
    </div>
  );
};

export default SkillsForm;
