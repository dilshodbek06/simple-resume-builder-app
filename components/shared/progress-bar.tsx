import Image from "next/image";
import React from "react";

interface CircularProgressBarProps {
  percentage: number;
  imgSrc: string;
}

const ProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  imgSrc,
}) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      {/* Image in the center */}
      <Image
        src={imgSrc}
        alt="center image"
        className="absolute w-16 h-16 rounded-full z-10"
        width={200}
        height={200}
      />

      {/* Circular Progress Bar */}
      <svg
        className="w-24 h-24 transform rotate-[-90deg]"
        viewBox="0 0 100 100"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="gray"
          strokeWidth="10"
          fill="transparent"
        ></circle>

        {/* Foreground Circle (progress) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="progress-circle"
        ></circle>
      </svg>
    </div>
  );
};

export default ProgressBar;
