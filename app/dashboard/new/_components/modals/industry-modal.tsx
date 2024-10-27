"use client";

import { Button } from "@/components/ui/button";
import SpinnerIcon from "../icons/spinner-icon";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Drawer } from "vaul";
import axios from "axios";
import toast from "react-hot-toast";
import { industryKnowledge } from "@/utils/dump-data";
import { Checkbox } from "@/components/ui/checkbox";

interface IndustryModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  initialState: string[];
}

const IndustryModal = ({
  handleClose,
  open,
  setIsOpen,
  initialState,
}: IndustryModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>(
    initialState || []
  );

  const handleChange = (checked: boolean, x: { id: number; name: string }) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, x.name]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== x.name));
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        industryKnowledge: selectedItems,
      };
      await axios.patch(`/api/resume/${params?.id}`, obj);
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

              {/* Form */}
              <div className="flex flex-col gap-y-4 w-full items-center py-3 overflow-y-auto max-h-[20rem]">
                {/* form in here */}
                {industryKnowledge.map((item) => (
                  <div
                    key={item.id}
                    className="max-w-md w-full mx-auto flex items-center gap-x-4 cursor-pointer"
                  >
                    <Checkbox
                      checked={selectedItems.includes(item.name)}
                      onCheckedChange={(e) => handleChange(e as boolean, item)}
                      id={item.id.toString()}
                    />
                    <label htmlFor={item.id.toString()}>{item.name}</label>
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

export default IndustryModal;
