import { IconType } from "react-icons/lib";

interface HobbyItemProps {
  title: string;
  icon: IconType | string;
}

const HobbyItem = ({ icon: Icon, title }: HobbyItemProps) => {
  return (
    <div className=" flex flex-col items-center">
      <Icon className="text-3xl text-white" />
      <p className="text-white">{title}</p>
    </div>
  );
};

export default HobbyItem;
