"use client";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaTelegram } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import EditIcon from "./icons/edit-icon";
import { Resume, SocialLink } from "@prisma/client";
import SocialLinksModal from "./modals/social-links-modal";
import { useState } from "react";

interface SocialFormProps {
  resume: Resume & {
    socialLinks: SocialLink[];
  };
}

const SocialForm = ({ resume }: SocialFormProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl min-h-[130px] bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 px-4 py-2 relative group">
      <h5 className="text-xl text-white"> Social links</h5>
      <div className="flex flex-col">
        {resume.socialLinks.length > 0 ? (
          resume.socialLinks.map((item, ind) => (
            <div key={ind} className="flex items-center gap-x-4">
              {item.platform === "telegram" ? (
                <FaTelegram className="text-xl fill-sky-500 text-white" />
              ) : item.platform === "instagram" ? (
                <FaInstagram className="text-xl fill-[#e1306c] text-white" />
              ) : item.platform === "linkedn" ? (
                <FaLinkedin className="text-xl fill-[#0a66c2] text-white" />
              ) : (
                <TbWorld className="text-xl  text-slate-800" />
              )}

              <p className="text-lg text-white">{item.url}</p>
            </div>
          ))
        ) : (
          <>
            <div className="flex items-center gap-x-4">
              <FaTelegram className="text-xl fill-sky-500 text-white" />
              <p className="text-lg text-white">Telegram link</p>
            </div>
            <div className="flex items-center gap-x-4 ">
              <FaInstagram className="text-xl fill-[#e1306c] text-white" />
              <p className="text-lg text-white">Instagram link</p>
            </div>
            <div className="flex items-center gap-x-4 ">
              <FaLinkedin className="text-xl fill-[#0a66c2] text-white" />
              <p className="text-lg text-white">Linkedn link</p>
            </div>
            <div className="flex items-center gap-x-4 ">
              <TbWorld className="text-xl  text-slate-800" />
              <p className="text-lg text-white">Website link</p>
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

      <SocialLinksModal
        handleClose={() => setIsOpen(false)}
        open={isOpen}
        setIsOpen={() => setIsOpen(false)}
      />
    </div>
  );
};

export default SocialForm;
