import TailwindButton from "@/components/Buttons/TailwindButton";
import { JobApplyPropsInterface } from "./interfaces";

const JobApply: React.FC<JobApplyPropsInterface> = ({ id }) => {
  return (
    <div className="w-[180px] leading-none mr-4">
      <TailwindButton text="Apply Now" bgColor="bg-[#140C25]" />
    </div>
  );
};

export default JobApply;
