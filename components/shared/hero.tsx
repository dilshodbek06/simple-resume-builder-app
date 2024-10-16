"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="px-4 sm:px-10">
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
            Create Professional Resumes with Ease
          </h1>
          <p className="text-base">
            Effortlessly create and customize your professional resume using our
            easy-to-use form builder. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div className="mt-10">
            <Button
              onClick={() => router.push("/dashboard")}
              className="px-8 py-6 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800"
            >
              Get started
            </Button>
          </div>
        </div>
        <hr className="my-12 border-gray-300" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <Image
            src="/images/google.svg"
            className="w-28 mx-auto"
            alt="google-logo"
            width={70}
            height={70}
          />
          <Image
            src="/images/google.svg"
            className="w-28 mx-auto"
            alt="facebook-logo"
            width={70}
            height={70}
          />
          <Image
            src="/images/google.svg"
            className="w-28 mx-auto"
            alt="linkedin-logo"
            width={70}
            height={70}
          />
          <Image
            src="/images/google.svg"
            className="w-28 mx-auto"
            alt="pinterest-logo"
            width={70}
            height={70}
          />
        </div>
      </div>
      <img
        src="https://readymadeui.com/bg-effect.svg"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default Hero;
