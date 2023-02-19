import TailwindButton from "@/components/Buttons/TailwindButton";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JobSharePropsInterface } from "./interfaces";

const JobShare: React.FC<JobSharePropsInterface> = ({ id }) => {
  return (
    <div className="w-[180px] leading-none">
      <TailwindButton
        text="Share"
        bgColor="bg-[#140C25]"
        iconRight={<FontAwesomeIcon icon={faShareNodes} className="px-3" />}
      />
    </div>
  );
};

export default JobShare;
