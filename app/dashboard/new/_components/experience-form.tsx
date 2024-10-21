"use client";

import EditIcon from "./icons/edit-icon";

const ExperienceForm = () => {
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
            experience with a lean design process: research, design, test, and
            iterate.
          </p>
        </div>
        <div className=" mt-5">
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
            experience with a lean design process: research, design, test, and
            iterate.
          </p>
        </div>
      </div>
      {/* Edit Button */}
      <button className="absolute inset-0 bg-black bg-opacity-25 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
        <EditIcon />
      </button>
    </div>
  );
};

export default ExperienceForm;
