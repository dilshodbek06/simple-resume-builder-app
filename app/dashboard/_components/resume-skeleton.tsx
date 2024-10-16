import { Skeleton } from "@/components/ui/skeleton";

const ResumeSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-32 md:w-36 h-[120px] md:h-[150px] rounded-md" />
    </div>
  );
};

export default ResumeSkeleton;
