"use client";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import EditIcon from "./icons/edit-icon";
import SecondaryInformationModal from "./modals/secondary-information-modal";
import { useState } from "react";
import { Resume } from "@prisma/client";

interface SecondaryInformationFormProps {
  resume: Resume;
}

const SecondaryInformationForm = ({
  resume,
}: SecondaryInformationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative group">
      <div className="rounded-xl px-6 py-3 flex items-center gap-x-6 md:gap-x-12 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
        <FaEnvelope className="fill-white text-3xl" />
        <p className="text-white text-xl">
          {resume.email ? resume.email : "email87@gmail.com"}
        </p>
      </div>
      <div className="rounded-xl px-6 py-3 flex items-center gap-x-6 md:gap-x-12 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
        <FaPhoneAlt className="fill-white text-3xl" />
        <p className="text-white text-xl">
          {resume.phone ? resume.phone : "+1 (123) 456-7890"}
        </p>
      </div>
      <div className="rounded-xl px-6 py-3 flex items-center gap-x-6 md:gap-x-12 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
        <TfiWorld className="fill-white text-3xl" />
        <p className="text-white text-xl">
          {resume.websiteUrl ? resume.websiteUrl : "www.yoursitename.com"}
        </p>
      </div>
      <div className="rounded-xl px-6 py-3 flex items-center gap-x-6 md:gap-x-12 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
        <FaLocationDot className="fill-white text-3xl" />
        <p className="text-white text-xl">
          {resume.location ? resume.location : "New York"}
        </p>
      </div>
      {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 bg-black bg-opacity-25 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center "
      >
        <EditIcon />
      </button>
      <SecondaryInformationModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
        initialState={{
          email: resume.email,
          phone: resume.phone,
          websiteUrl: resume.websiteUrl,
          location: resume.location,
        }}
      />
    </div>
  );
};

export default SecondaryInformationForm;
