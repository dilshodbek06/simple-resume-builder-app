"use client";

import ProgressBar from "@/components/shared/progress-bar";
import EditIcon from "./icons/edit-icon";
import { Resume, Skill } from "@prisma/client";
import SkillsModal from "./modals/skills-modal";
import { useState } from "react";

interface SkillsFormProps {
  resume: Resume & {
    skills: Skill[];
  };
}

const SkillsForm = ({ resume }: SkillsFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <div className="flex items-center">
        <div className="px-4 w-full font-bold flex justify-center items-center py-2 tracking-widest uppercase rounded-lg bg-neutral-700 text-white">
          My Skills
        </div>
        <div className="h-[2px] bg-neutral-700 w-full rounded-md"></div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {resume.skills.length > 0 ? (
          resume.skills.map((item, ind) => (
            <ProgressBar
              key={ind}
              imgSrc={item.imageUrl}
              percentage={item.knowledgePct}
              name={item.name}
            />
          ))
        ) : (
          <>
            {[1, 1, 1, 1, 1, 1].map((_, ind) => (
              <ProgressBar
                key={ind}
                imgSrc="/images/skills/react.svg"
                percentage={30}
                name="Name"
              />
            ))}
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

      <SkillsModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
        initialState={{ skills: resume.skills }}
      />
    </div>
  );
};

export default SkillsForm;
