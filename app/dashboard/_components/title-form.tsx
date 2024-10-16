"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { Drawer } from "vaul";

interface TitleFormProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
const TitleForm = ({ isOpen, setIsOpen }: TitleFormProps) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/resume", {
        title,
      });
      router.push(`/dashboard/new/${response.data.id}`);
      toast.success("Successful");
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 min-h-[100px] h-fit fixed bottom-0 left-0 right-0 outline-none">
            <Drawer.Title className="hidden"></Drawer.Title>
            <Drawer.Description className="hidden"></Drawer.Description>
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div
                aria-hidden
                className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
              />
              <div className="py-12">
                <Input
                  placeholder="enter title..."
                  className=" mx-auto md:w-1/3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Button
                  onClick={handleSave}
                  disabled={loading}
                  className="mt-3 w-full md:w-1/3 mx-auto flex gap-x-3 "
                >
                  {loading ? (
                    <>
                      <FaSpinner className="-mt-1 animate-spin" /> Loading
                    </>
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default TitleForm;
