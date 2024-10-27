"use client";

import { Button } from "@/components/ui/button";
import SpinnerIcon from "../icons/spinner-icon";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Drawer } from "vaul";
import axios from "axios";
import toast from "react-hot-toast";
import { languages } from "@/utils/dump-data";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Language } from "@prisma/client";

interface LanguagesModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  initialState: {
    languages: Language[];
  };
}

interface LanguageItem {
  name: string;
  rate: number;
}

const LanguagesModal = ({
  handleClose,
  open,
  setIsOpen,
  initialState,
}: LanguagesModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState<LanguageItem[]>(
    initialState.languages || []
  );

  const handleChange = (
    checked: boolean,
    language: { id: number; name: string }
  ) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, { name: language.name, rate: 1 }]);
    } else {
      setSelectedItems((prev) =>
        prev.filter((item) => item.name !== language.name)
      );
    }
  };

  const handleLevelChange = (rate: number, languageName: string) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.name === languageName ? { ...item, rate } : item
      )
    );
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        languages: selectedItems,
      };
      await axios.patch(`/api/resume/${params?.id}/language`, obj);
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
                {languages.map((item) => (
                  <div
                    key={item.id}
                    className="max-w-[18rem] w-full mx-auto flex justify-between  items-center gap-x-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-x-3">
                      <Checkbox
                        checked={selectedItems.some(
                          (selected) => selected.name === item.name
                        )}
                        onCheckedChange={(e) =>
                          handleChange(e as boolean, item)
                        }
                        id={item.id.toString()}
                      />
                      <label htmlFor={item.id.toString()}>{item.name}</label>
                    </div>

                    <div>
                      <Select
                        value={
                          selectedItems
                            .find((selected) => selected.name === item.name)
                            ?.rate.toString() || ""
                        }
                        onValueChange={(value) =>
                          handleLevelChange(parseInt(value), item.name)
                        }
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Level</SelectLabel>
                            {[1, 2, 3, 4, 5].map((item, ind) => (
                              <SelectItem key={ind} value={item.toString()}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
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

export default LanguagesModal;
