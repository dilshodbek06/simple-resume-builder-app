/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

const FloatButton = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={() => router.push("/")}
        className="text-white shadow-xl p-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-900 hover:scale-105 transition-all  duration-300"
      >
        <Home />
      </button>
    </div>
  );
};

export default FloatButton;
