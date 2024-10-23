"use client";

import { Button } from "@/components/ui/button";
import SpinnerIcon from "../icons/spinner-icon";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Drawer } from "vaul";
import axios from "axios";
import toast from "react-hot-toast";
import { hobbies } from "@/utils/dump-data";
import AnimatedCheckIcon from "../icons/animated-check-icon";

interface HobbiesModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
}

const HobbiesModal = ({ handleClose, open, setIsOpen }: HobbiesModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const handleHobbyClick = (name: string) => {
    setSelectedHobbies((prevSelected) => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter((hobby) => hobby !== name);
      }
      if (prevSelected.length < 4) {
        return [...prevSelected, name];
      }
      return prevSelected;
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        hobbies: selectedHobbies,
      };
      await axios.patch(`/api/resume/${params?.id}/hobby`, obj);
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
          <Drawer.Content className="bg-gray-100 flex flex-col items-center rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
            <Drawer.Title className="hidden"></Drawer.Title>
            <Drawer.Description className="hidden"></Drawer.Description>

            <div className="w-full p-4 bg-white rounded-t-[10px]">
              {/* Handle Drawer */}
              <div
                aria-hidden
                className="mx-auto w-12 h-1.5 rounded-full bg-gray-300 mb-8"
              />
              <div className="py-1 text-center">
                <p className="font-medium text-gray-800">
                  ({selectedHobbies.length}/4)
                </p>
              </div>
              {/* Form */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full py-3 px-1 overflow-y-auto max-h-[20rem]">
                {hobbies.map(({ icon: Icon, name }, ind) => (
                  <div
                    onClick={() => handleHobbyClick(name)}
                    key={ind}
                    className={`border p-3 flex justify-center items-center flex-col relative rounded-sm cursor-pointer hover:bg-gray-100 ${
                      selectedHobbies.includes(name) ? "bg-gray-100" : ""
                    }`}
                  >
                    <Icon className="text-lg" />
                    <p className="text-gray-800 font-medium mt-[2px]">{name}</p>
                    {selectedHobbies.includes(name) && <AnimatedCheckIcon />}
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

export default HobbiesModal;
