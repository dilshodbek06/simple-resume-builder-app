import UserInformationForm from "../_components/user-information-form";

const OneResumePage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 via-purple-600 to-pink-500 flex justify-center items-center">
      <div className="flex gap-x-2">
        {/* left side */}
        <div className="w-[24rem] h-[35rem] rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 bg-gray-300 px-3 py-4">
          {/* name, profile image */}
          <UserInformationForm />
          {/* email, location  */}
          {/* industry knowledge */}
          {/* languages */}
          {/* social  */}
          {/* hobbies */}
        </div>
        {/* right side */}
        <div className="w-[24rem] h-[35rem] rounded-lg bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-80 saturate-100 backdrop-contrast-100 bg-white"></div>
      </div>
    </div>
  );
};

export default OneResumePage;
