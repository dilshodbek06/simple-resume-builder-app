"use client";

import { Experience, Resume } from "@prisma/client";
import EditIcon from "./icons/edit-icon";
import { useState } from "react";
import ExperiencesModal from "./modals/experiences-modal";
import { formatDateRange } from "@/utils/exp-date-format";

interface ExperienceFormProps {
  resume: Resume & {
    experiences: Experience[];
  };
}

const ExperienceForm = ({ resume }: ExperienceFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <div className="flex items-center">
        <div className="px-4 w-full font-bold flex justify-center items-center py-2 tracking-widest uppercase rounded-lg bg-neutral-700 text-white">
          Experience
        </div>
        <div className="h-[2px] bg-neutral-700 w-full rounded-md"></div>
      </div>
      <div className="mt-4">
        {/* one item  */}
        {resume.experiences.length > 0 ? (
          resume.experiences.map((item, ind) => (
            <div key={ind} className="mt-2">
              <h5 className="font-extrabold text-neutral-800 tracking-wide">
                {item.companyName}
              </h5>
              <p className="font-semibold text-neutral-700 mt-1">
                {item.jobProfession}
              </p>
              <p className="text-sm text-neutral-700">
                {formatDateRange(item.startDate, item.endDate ?? new Date())}
              </p>
              <p className="font-medium mt-1 text-sm">{item.description}</p>
            </div>
          ))
        ) : (
          <>
            <div>
              <h5 className="font-extrabold text-neutral-800 tracking-wide">
                Blue Moon Consultency Studio
              </h5>
              <p className="font-semibold text-neutral-700 mt-1">
                Seniour UI designer
              </p>
              <p className="text-sm text-neutral-700">
                Aug 2020 - Present - 1 year, New York
              </p>
              <p className="font-medium mt-1 text-sm">
                Product team to prototype, design and deliver the UI and UX
                experience with a lean design process: research, design, test,
                and iterate.
              </p>
            </div>
            <div className=" mt-5">
              <h5 className="font-extrabold text-neutral-800 tracking-wide">
                Blue Moon Consultency Studio
              </h5>
              <p className="font-semibold text-neutral-700 mt-1">
                Seniour UI designer
              </p>
              <p className="text-sm text-neutral-700">Aug 2020 - Sep 2022</p>
              <p className="font-medium mt-1 text-sm">
                Product team to prototype, design and deliver the UI and UX
                experience with a lean design process: research, design, test,
                and iterate.
              </p>
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

      <ExperiencesModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ExperienceForm;
