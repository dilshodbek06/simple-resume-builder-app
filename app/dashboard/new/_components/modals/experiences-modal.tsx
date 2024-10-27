"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";
import SpinnerIcon from "../icons/spinner-icon";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

interface ExperienceFormData {
  companyName: string;
  profession: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  description: string;
}

interface ExperiencesModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
}

const ExperiencesModal = ({
  handleClose,
  open,
  setIsOpen,
}: ExperiencesModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ExperienceFormData[]>([
    {
      companyName: "",
      profession: "",
      startDate: undefined,
      endDate: undefined,
      description: "",
    },
  ]);

  const handleAddNewForm = () => {
    if (formData.length < 3) {
      setFormData([
        ...formData,
        {
          companyName: "",
          profession: "",
          startDate: undefined,
          endDate: undefined,
          description: "",
        },
      ]);
    } else {
      toast.error("You can only add up to 3 forms.");
    }
  };

  const handleRemoveForm = (index: number) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  };

  const handleInputChange = (
    index: number,
    field: keyof ExperienceFormData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        experiences: formData,
      };
      await axios.patch(`/api/resume/${params?.id}/experience`, obj);
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
                  ({formData.length}/3)
                </p>
              </div>
              {/* Forms */}
              <div className="overflow-y-auto scrollbar-thin max-h-[20rem]">
                {formData.map((form, index) => (
                  <div key={index} className="rounded-md py-2 px-1 w-full mb-4">
                    <div className="w-full max-w-md mx-auto">
                      <label
                        htmlFor={`company_name_${index}`}
                        className="font-bold"
                      >
                        Company name
                      </label>
                      <Input
                        id={`company_name_${index}`}
                        placeholder="Enter Company name..."
                        value={form.companyName}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "companyName",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="w-full max-w-md mx-auto my-4">
                      <label
                        htmlFor={`profession_${index}`}
                        className="font-bold"
                      >
                        Your Profession
                      </label>
                      <Input
                        id={`profession_${index}`}
                        placeholder="Enter Profession..."
                        value={form.profession}
                        onChange={(e) =>
                          handleInputChange(index, "profession", e.target.value)
                        }
                      />
                    </div>
                    <div className="w-full flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mt-3">
                      <div className="w-full">
                        <label
                          htmlFor={`start_date_${index}`}
                          className="font-bold block"
                        >
                          Start Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full sm:w-[218px] justify-start text-left font-normal",
                                !form.startDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {form.startDate ? (
                                format(form.startDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={form.startDate}
                              onSelect={(date) =>
                                handleInputChange(index, "startDate", date)
                              }
                              initialFocus
                              id={`start_date_${index}`}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor={`end_date_${index}`}
                          className="font-bold block"
                        >
                          Finish Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " w-full sm:w-[218px] justify-start text-left font-normal",
                                !form.endDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {form.endDate ? (
                                format(form.endDate, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={form.endDate}
                              onSelect={(date) =>
                                handleInputChange(index, "endDate", date)
                              }
                              initialFocus
                              id={`end_date_${index}`}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="w-full max-w-md mx-auto mt-3">
                      <label
                        htmlFor={`description_${index}`}
                        className="font-bold"
                      >
                        Short description
                      </label>
                      <Textarea
                        id={`description_${index}`}
                        placeholder="Describe your works in this company..."
                        value={form.description}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    {formData.length > 1 && (
                      <div className="flex justify-end w-full mt-2">
                        <Button
                          variant="destructive"
                          onClick={() => handleRemoveForm(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                    {index !== formData.length - 1 && (
                      <div className="h-[1px] bg-gray-300 mt-3"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Add New Button */}
              <div className="flex justify-end w-full ">
                <Button
                  className="md:mr-4"
                  variant="secondary"
                  onClick={handleAddNewForm}
                >
                  Add New
                </Button>
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

export default ExperiencesModal;
