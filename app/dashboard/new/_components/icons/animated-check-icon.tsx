import { useEffect, useState } from "react";
import "./AnimatedCheckIcon.css"; // Import the CSS file

const AnimatedCheckIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation on component mount
  useEffect(() => {
    setInterval(() => {
      setIsVisible(true);
    }, 20); // Small delay before the animation starts
  }, []);

  return (
    <svg
      className={`checkmark ${isVisible ? "animate" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="checkmark__circle"
        cx="26"
        cy="26"
        r="25"
        fill="#4caf50"
      />
      <path
        className="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  );
};

export default AnimatedCheckIcon;
