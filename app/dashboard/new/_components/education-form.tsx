"use client";

import { Education, Resume } from "@prisma/client";
import EditIcon from "./icons/edit-icon";
import { useState } from "react";
import EducationModal from "./modals/education-modal";
import { formatDateRange } from "@/utils/exp-date-format";

interface EducationFormProps {
  resume: Resume & {
    educations: Education[];
  };
}

const EducationForm = ({ resume }: EducationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <div className="flex items-center">
        <div className="px-4 w-full font-bold flex justify-center items-center py-2 tracking-widest uppercase rounded-lg bg-neutral-700 text-white">
          Education
        </div>
        <div className="h-[2px] bg-neutral-700 w-full rounded-md"></div>
      </div>
      <div className="mt-4 ">
        {resume.educations.length > 0 ? (
          resume.educations.map((item, ind) => (
            <div key={ind} className="mt-3">
              <h5 className="font-extrabold text-neutral-800 tracking-wide">
                {item.university}
              </h5>
              <p className="font-semibold text-neutral-700 mt-1">
                {item.course}
              </p>
              <p className="text-sm text-neutral-700">
                {formatDateRange(item.startDate, item.endDate ?? new Date())},
                {item.location}
              </p>
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
              <p className="text-sm text-neutral-700">2011-2015, New York</p>
            </div>
            <div className=" mt-5">
              <h5 className="font-extrabold text-neutral-800 tracking-wide">
                Blue Moon Consultency Studio
              </h5>
              <p className="font-semibold text-neutral-700 mt-1">
                Seniour UI designer
              </p>
              <p className="text-sm text-neutral-700">2015-2020, New York</p>
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

      <EducationModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
        initialState={{ educations: resume.educations }}
      />
    </div>
  );
};

export default EducationForm;
