"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import SpinnerIcon from "../icons/spinner-icon";
import axios from "axios";
import toast from "react-hot-toast";
import { skills } from "@/utils/dump-data";
import Image from "next/image";
import AnimatedCheckIcon from "../icons/animated-check-icon";
import { Slider } from "@/components/ui/slider";
import { Skill } from "@prisma/client";

interface SkillsModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  initialState: {
    skills: Skill[];
  };
}

type SkillType = {
  name: string;
  imageUrl: string;
  knowledgePct: number;
};

const SkillsModal = ({
  handleClose,
  open,
  setIsOpen,
  initialState,
}: SkillsModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<SkillType[]>([]);

  useEffect(() => {
    if (initialState.skills.length > 0) {
      setSelectedSkills(
        initialState.skills.map((skill) => ({
          name: skill.name,
          imageUrl: skill.imageUrl,
          knowledgePct: skill.knowledgePct,
        }))
      );
    }
  }, [initialState.skills]);

  // Handle skill selection and unselection
  const handleSkillClick = (name: string, icon: string) => {
    setSelectedSkills((prevSelected) => {
      const isSkillSelected = prevSelected.find((skill) => skill.name === name);

      if (isSkillSelected) {
        // Remove skill if already selected
        return prevSelected.filter((skill) => skill.name !== name);
      } else if (prevSelected.length < 10) {
        return [...prevSelected, { name, imageUrl: icon, knowledgePct: 50 }];
      }
      return prevSelected;
    });
  };

  // Handle knowledge percentage update for a specific skill
  let knowledgeChangeTimeout: NodeJS.Timeout | null = null;

  const handleKnowledgeChange = (name: string, value: number) => {
    if (knowledgeChangeTimeout) {
      clearTimeout(knowledgeChangeTimeout);
    }

    knowledgeChangeTimeout = setTimeout(() => {
      setSelectedSkills((prevSelected) =>
        prevSelected.map((skill) =>
          skill.name === name ? { ...skill, knowledgePct: value } : skill
        )
      );
    }, 300); // Adjust the delay as needed (300ms here)
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        skills: selectedSkills,
      };
      await axios.patch(`/api/resume/${params?.id}/skill`, obj);
      toast.success("Success");
      handleClose();
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-gray-100 flex flex-col  items-center rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
            <Drawer.Title className="hidden"></Drawer.Title>
            <Drawer.Description className="hidden"></Drawer.Description>

            <div className="w-full p-4 bg-white rounded-t-[10px]">
              {/* Handle Drawer */}
              <div
                aria-hidden
                className="mx-auto w-12 h-1.5 rounded-full bg-gray-300  mb-8"
              />
              <div className="py-1 text-center">
                <p className="font-medium text-gray-800">
                  ({selectedSkills.length}/10)
                </p>
              </div>
              {/* Forms */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full py-3 px-1 overflow-y-auto max-h-[20rem]">
                {skills.map(({ icon, name }, ind) => (
                  <div
                    key={ind}
                    className={`border p-1 flex justify-center items-center flex-col relative rounded-sm cursor-pointer hover:bg-gray-100`}
                  >
                    <div
                      onClick={() => handleSkillClick(name, icon)}
                      className="flex h-full justify-center items-center flex-col w-full "
                    >
                      <Image alt={name} src={icon} width={40} height={40} />
                      <p className="text-gray-800 font-medium mt-[3px]">
                        {name}
                      </p>
                    </div>
                    <Slider
                      defaultValue={[
                        selectedSkills.find((skill) => skill.name === name)
                          ?.knowledgePct ?? 0,
                      ]}
                      max={100}
                      step={1}
                      onValueChange={(value) =>
                        handleKnowledgeChange(name, value[0])
                      }
                    />
                    {selectedSkills.find((skill) => skill.name === name) && (
                      <AnimatedCheckIcon />
                    )}
                  </div>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex justify-end sm:justify-center gap-x-4 mt-4">
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="md:px-6"
                >
                  Cancel
                </Button>
                <Button
                  disabled={loading}
                  onClick={handleSave}
                  className="md:px-6"
                >
                  {loading && <SpinnerIcon />} Save
                </Button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default SkillsModal;
