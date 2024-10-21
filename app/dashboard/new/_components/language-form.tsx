"use client";

import { useState } from "react";
import EditIcon from "./icons/edit-icon";
import LanguageLevel from "./language-level";
import LanguagesModal from "./modals/languages-modal";
import { Language, Resume } from "@prisma/client";

interface LanguageFormProps {
  resume: Resume & {
    languages: Language[];
  };
}

const LanguageForm = ({ resume }: LanguageFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl min-h-[130px] bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 px-4 py-2 relative group">
      <h5 className="text-white text-lg">Languages</h5>
      <div className="flex flex-col">
        {resume.languages.length > 0 ? (
          resume.languages.map((item, ind) => (
            <LanguageLevel key={ind} language={item.name} level={item.rate} />
          ))
        ) : (
          <>
            <LanguageLevel language="Language name" level={1} />
            <LanguageLevel language="Language name" level={5} />
            <LanguageLevel language="Language name" level={3} />
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
      <LanguagesModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
      />
    </div>
  );
};

export default LanguageForm;
