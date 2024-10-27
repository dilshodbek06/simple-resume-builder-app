"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast from "react-hot-toast";
import { Drawer } from "vaul";
import SpinnerIcon from "../icons/spinner-icon";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface SecondaryInformationModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  initialState: {
    email: string | null;
    phone: string | null;
    websiteUrl: string | null;
    location: string | null;
  };
}

const SecondaryInformationModal = ({
  handleClose,
  open,
  setIsOpen,
  initialState,
}: SecondaryInformationModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [email, setEmail] = useState(initialState.email || "");
  const [phone, setPhone] = useState(initialState.phone || "");
  const [websiteUrl, setWebsiteUrl] = useState(initialState.websiteUrl || "");
  const [location, setLocation] = useState<string>(initialState.location || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        email,
        phone,
        websiteUrl,
        location,
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
              <div className="flex flex-col gap-y-4 w-full items-center py-3">
                <div className="w-full max-w-md">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="w-full max-w-md">
                  <label htmlFor="phone" className="font-bold">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    placeholder="Enter phone..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* Website url */}
                <div className="w-full max-w-md">
                  <label htmlFor="websiteUrl" className="font-bold">
                    Website Url
                  </label>
                  <Input
                    id="websiteUrl"
                    placeholder="Enter website url..."
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>
                {/* Location */}
                <div className="w-full max-w-md">
                  <label htmlFor="location" className="font-bold">
                    Location
                  </label>
                  <Input
                    id="location"
                    placeholder="Enter location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
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

export default SecondaryInformationModal;
