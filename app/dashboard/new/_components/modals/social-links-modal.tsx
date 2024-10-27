"use client";

import { Button } from "@/components/ui/button";
import SpinnerIcon from "../icons/spinner-icon";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Drawer } from "vaul";
import axios from "axios";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { SocialLink } from "@prisma/client";

interface SocialLinksModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  initialState?: {
    socialLinks: SocialLink[];
  };
}

const SocialLinksModal = ({
  handleClose,
  open,
  setIsOpen,
  initialState,
}: SocialLinksModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [telegram, setTelegram] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedn, setLinkedn] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (initialState?.socialLinks) {
      const links = initialState.socialLinks.reduce(
        (acc: Record<string, string>, link) => {
          acc[link.platform] = link.url;
          return acc;
        },
        {}
      );

      setTelegram(links.telegram || "");
      setInstagram(links.instagram || "");
      setLinkedn(links.linkedn || "");
      setWebsite(links.website || "");
    }
  }, [initialState]);

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        socialLinks: [
          { platform: "telegram", url: telegram },
          { platform: "instagram", url: instagram },
          { platform: "linkedn", url: linkedn },
          { platform: "website", url: website },
        ],
      };
      await axios.patch(`/api/resume/${params?.id}/social`, obj);
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
                {/* Telegram link */}
                <div className="w-full max-w-md">
                  <label htmlFor="telegram" className="font-bold">
                    Telegram link
                  </label>
                  <Input
                    id="telegram"
                    placeholder="Enter telegram link..."
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                  />
                </div>
                {/* Instagram */}
                <div className="w-full max-w-md">
                  <label htmlFor="instagram" className="font-bold">
                    Instagram link
                  </label>
                  <Input
                    id="instagram"
                    placeholder="Enter instagram link..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                </div>
                {/* Linkedn */}
                <div className="w-full max-w-md">
                  <label htmlFor="linkedn" className="font-bold">
                    Linkedn link
                  </label>
                  <Input
                    id="linkedn"
                    placeholder="Enter linkedn link..."
                    value={linkedn}
                    onChange={(e) => setLinkedn(e.target.value)}
                  />
                </div>
                {/* Website */}
                <div className="w-full max-w-md">
                  <label htmlFor="website" className="font-bold">
                    Website link
                  </label>
                  <Input
                    id="website"
                    placeholder="Enter website link..."
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
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

export default SocialLinksModal;
