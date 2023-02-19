import { JobsContextDataInterface } from "../../interfaces";
import JobActions from "../JobActions";

const JobDetailsFooter: React.FC<JobsContextDataInterface> = ({
  selectedJob,
}) => {
  return (
    <div className="jobDetails-footer w-full pt-12 pr-12 pb-12">
      <div className="flex flex-col pl-12">
        <span className="w-full font-bold text-[1.5rem]">Perks</span>
        <span className="w-full font-medium text-[1rem]">
          {selectedJob?.perks}
        </span>
      </div>

      <div className="flex flex-col my-[3rem] pl-12">
        <span className="w-full font-bold text-[1.5rem]">Company Overview</span>
        <span className="w-full font-medium text-[1rem]">
          {selectedJob?.company?.about}
        </span>
      </div>

      <JobActions />
    </div>
  );
};

export default JobDetailsFooter;
