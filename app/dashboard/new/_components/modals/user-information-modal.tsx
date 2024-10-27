"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadDropzone } from "@/utils/uploadthing";
import { useState } from "react";
import toast from "react-hot-toast";
import { Drawer } from "vaul";
import SpinnerIcon from "../icons/spinner-icon";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface UserInformationModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  initialState: {
    firstname: string | null;
    lastname: string | null;
    jobProfession: string | null;
    imageUrl: string | null;
  };
}

const UserInformationModal = ({
  open,
  setIsOpen,
  handleClose,
  initialState,
}: UserInformationModalProps) => {
  const params = useParams();
  const router = useRouter();

  const [firstname, setFirstname] = useState(initialState.firstname || "");
  const [lastname, setLastname] = useState(initialState.lastname || "");
  const [profession, setProfession] = useState(
    initialState.jobProfession || ""
  );
  const [profileImage, setProfileImage] = useState<string | null>(
    initialState.imageUrl || null
  );
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      const obj = {
        firstName: firstname,
        lastName: lastname,
        jobProfession: profession,
        imageUrl: profileImage,
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

  const handleDelete = () => {
    setProfileImage(null);
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
                {/* Profile Image Upload */}
                {profileImage ? (
                  <div className="w-full max-w-md flex justify-center">
                    <div className="overflow-hidden rounded-full relative w-[150px] h-[150px]">
                      <Image alt="profile image" src={profileImage} fill />
                    </div>
                    <button
                      onClick={handleDelete}
                      className="p-1 w-6 h-6 flex justify-center items-center text-white bg-red-500 hover:bg-red-600 rounded-full "
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <div className="w-full max-w-md">
                    <label className="font-bold" htmlFor="upload">
                      Upload profile photo
                    </label>
                    <UploadDropzone
                      className="max-h-[13rem] py-[1.5rem]"
                      endpoint="profileImage"
                      onClientUploadComplete={(res) => {
                        setProfileImage(res?.[0].url);
                      }}
                      onUploadError={(error: Error) => {
                        toast.error(error?.message);
                      }}
                    />
                  </div>
                )}

                {/* First Name */}
                <div className="w-full max-w-md">
                  <label htmlFor="firstname" className="font-bold">
                    First Name
                  </label>
                  <Input
                    id="firstname"
                    placeholder="Enter first name..."
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>

                {/* Last Name */}
                <div className="w-full max-w-md">
                  <label htmlFor="lastname" className="font-bold">
                    Last Name
                  </label>
                  <Input
                    id="lastname"
                    placeholder="Enter last name..."
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>

                {/* Profession */}
                <div className="w-full max-w-md">
                  <label htmlFor="profession" className="font-bold">
                    Profession
                  </label>
                  <Input
                    id="profession"
                    placeholder="Enter profession..."
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
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

export default UserInformationModal;
