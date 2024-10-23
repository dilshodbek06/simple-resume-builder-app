import Image from "next/image";
import React from "react";

interface CircularProgressBarProps {
  percentage: number;
  imgSrc: string;
  name: string;
}

const ProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  imgSrc,
  name,
}) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Circular Progress Bar with Image in the center */}
      <div className="relative flex items-center justify-center">
        {/* Image in the center */}
        <Image
          src={imgSrc ? imgSrc : "/images/user.svg"}
          alt="center image"
          className="absolute rounded-full"
          width={55}
          height={55}
        />

        {/* Circular Progress Bar */}
        <svg
          className="w-22 h-24 transform rotate-[-90deg]"
          viewBox="0 0 100 100"
        >
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeWidth="10"
            fill="transparent "
          ></circle>

          {/* Foreground Circle (progress) */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#3B5999"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="progress-circle rounded-sm"
          ></circle>
        </svg>
      </div>

      {/* Tech Name below the circular progress bar */}
      <p className="text-center text-lg font-medium">{name}</p>
    </div>
  );
};

export default ProgressBar;
