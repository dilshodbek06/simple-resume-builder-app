import prisma from "@/lib/db";
import IndustryKnowledgeForm from "../_components/industry-knowledge-form";
import LanguageForm from "../_components/language-form";
import SecondaryInformationForm from "../_components/secondary-information-form";
import UserInformationForm from "../_components/user-information-form";
import { auth } from "@clerk/nextjs/server";
import SocialForm from "../_components/social-form";
import HobbiesForm from "../_components/hobbies-form";
import ExperienceForm from "../_components/experience-form";
import EducationForm from "../_components/education-form";
import SkillsForm from "../_components/skills-form";
import { redirect } from "next/navigation";

const OneResumePage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { userId } = auth();
  const currentResume = await prisma.resume.findUnique({
    where: {
      id: id,
      User: {
        clerkId: userId!,
      },
    },
    include: {
      languages: true,
    },
  });
  if (!currentResume) {
    return redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 via-purple-600 to-pink-500 flex  justify-center items-center py-4">
      <div className="flex flex-col md:flex-row gap-x-2">
        {/* left side */}
        <div className="w-[25rem] min-h-[35rem] rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 bg-gray-300 px-3 py-4">
          {/* name, profile image */}
          <UserInformationForm resume={currentResume} />
          {/* email, location  */}
          <div className="py-4">
            <SecondaryInformationForm resume={currentResume} />
          </div>
          {/* industry knowledge */}
          <IndustryKnowledgeForm resume={currentResume} />
          {/* languages */}
          <div className="mt-3">
            <LanguageForm resume={currentResume} />
          </div>
          {/* social  */}
          <div className="mt-3">
            <SocialForm />
          </div>
          {/* hobbies */}
          <div className="mt-3">
            <HobbiesForm />
          </div>
        </div>
        {/* right side */}
        <div className="w-[25rem] min-h-[35rem] rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-100 saturate-100 backdrop-contrast-50 bg-white px-3 py-4">
          <ExperienceForm />
          <div className="mt-4">
            <EducationForm />
          </div>
          <div className="mt-2">
            <SkillsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneResumePage;
