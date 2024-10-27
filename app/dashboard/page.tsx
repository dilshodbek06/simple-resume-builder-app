"use client";

import { FiFileText } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";
import TitleForm from "./_components/title-form";
import { useEffect, useState, useMemo, useCallback } from "react";
import FloatButton from "./_components/float-button";
import toast from "react-hot-toast";
import axios from "axios";
import ResumeSkeleton from "./_components/resume-skeleton";
import { Resume } from "@prisma/client";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resumes, setResumes] = useState<Resume[]>([]);

  const commonClassNames =
    "md:p-8 p-4 w-32 border-2 border-gray-700 rounded-md bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-60 saturate-100 backdrop-contrast-100 transition-all hover:scale-105 duration-300 shadow-lg text-center flex justify-center items-center flex-col";

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/resume");
        setResumes(res.data);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load resumes. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchResumes();
  }, []);

  const mappedResumes = useMemo(
    () =>
      resumes.map((item, ind) => (
        <div
          onClick={() => router.push(`/dashboard/new/${item.id}`)}
          key={ind}
          className={commonClassNames}
        >
          <FiFileText size={40} className="text-gray-700" />
          <p className="text-gray-700 text-xl mt-3">{item?.title}</p>
        </div>
      )),
    [resumes, router]
  );

  const handleCreateClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="min-h-screen py-4 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-400 via-indigo-300 to-indigo-100">
      <h1 className="text-xl md:text-3xl font-bold text-center text-gray-700">
        Start a New Resume or Choose an Existing One
      </h1>
      <div className="container mx-auto px-3 md:px-0">
        <div className="mt-10 flex flex-wrap items-center gap-4 cursor-pointer select-none">
          {loading
            ? [0, 0, 0].map((_, ind) => <ResumeSkeleton key={ind} />)
            : mappedResumes}

          <div onClick={handleCreateClick} className={commonClassNames}>
            <VscNewFile size={40} className="text-gray-700 mx-auto" />
            <p className="text-gray-700 text-xl mt-3 text-center">Create</p>
          </div>
        </div>
      </div>
      <div>
        <FloatButton />
      </div>
      <TitleForm isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
    </div>
  );
};

export default DashboardPage;
