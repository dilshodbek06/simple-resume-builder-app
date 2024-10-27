"use client";

import { Resume } from "@prisma/client";
import EditIcon from "./icons/edit-icon";
import { useState } from "react";
import IndustryModal from "./modals/industry-modal";

interface IndustryKnowledgeFormProps {
  resume: Resume;
}

const IndustryKnowledgeForm = ({ resume }: IndustryKnowledgeFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl min-h-[130px] bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 px-4 py-2 relative group">
      <h5 className="text-white text-lg">Industry Knowledge</h5>
      <ul className="list-disc text-white ml-4">
        {resume.industryKnowledge.length > 0 ? (
          resume.industryKnowledge.map((item, ind) => (
            <li key={ind} className="text-lg">
              {item}
            </li>
          ))
        ) : (
          <>
            <li className="text-lg">Lorem, ipsum.</li>
            <li className="text-lg">Lorem, ipsum.</li>
            <li className="text-lg">Lorem, ipsum.</li>
            <li className="text-lg">Lorem, ipsum.</li>
            <li className="text-lg">Lorem, ipsum.</li>
            <li className="text-lg">Lorem, ipsum.</li>
          </>
        )}
      </ul>
      {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 bg-black bg-opacity-25 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center "
      >
        <EditIcon />
      </button>

      <IndustryModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
        initialState={resume.industryKnowledge}
      />
    </div>
  );
};

export default IndustryKnowledgeForm;
