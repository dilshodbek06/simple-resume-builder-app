"use client";

import Image from "next/image";
import EditIcon from "./icons/edit-icon";
import UserInformationModal from "./modals/user-information-modal";
import { useState } from "react";
import { Resume } from "@prisma/client";

interface UserInformationFormProps {
  resume: Resume;
}

const UserInformationForm = ({ resume }: UserInformationFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-x-5 justify-evenly group">
      {/* Profile Image Container */}
      <div className="w-[150px] h-[150px] rounded-full border relative overflow-hidden">
        <Image
          className="object-cover"
          alt="uploaded photo"
          src={resume.imageUrl ? resume.imageUrl : "/images/user.svg"}
          fill
          priority
        />
      </div>

      {/* User Info */}
      <div>
        <h2 className="text-neutral-300 text-4xl tracking-widest">
          {resume.firstName ? resume.firstName : "Folly"}
        </h2>
        <h1 className="text-white text-5xl mt-2 tracking-wider">
          {resume.lastName ? resume.lastName : "Justin"}
        </h1>
        <p className="font-bold text-gray-100 mt-2 tracking-wider">
          {resume.jobProfession ? resume.jobProfession : "UI/UX Designer"}
        </p>
      </div>

      {/* Edit Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 bg-black bg-opacity-25 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center "
      >
        <EditIcon />
      </button>
      <UserInformationModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
      />
    </div>
  );
};

export default UserInformationForm;
