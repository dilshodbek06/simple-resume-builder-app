import Image from "next/image";

const UserInformationForm = () => {
  return (
    <div className="flex items-center gap-x-5 justify-evenly">
      <div className="w-[150px] h-[150px] rounded-full border relative overflow-hidden">
        <Image
          className="object-cover "
          alt="uploaded photo"
          src="/images/user.svg"
          fill
          //   placeholder="blur"
          //   blurDataURL="/images/user.svg"
        />
      </div>
      <div>
        <h2 className="text-neutral-300 text-4xl tracking-widest">Folly</h2>
        <h1 className="text-white text-5xl mt-2 tracking-wider">Justin</h1>
        <p className="font-bold text-gray-100 mt-2 tracking-wider">UI/UX Designer</p>
      </div>
    </div>
  );
};

export default UserInformationForm;
