import JobApply from "./JobApply";
import JobShare from "./JobShare";

const JobActions: React.FC = () => (
  <div className="jobDetails-actions flex sm:justify-center md:justify-end items-end w-[420px] sm:mt-5">
    <JobApply />
    <JobShare />
  </div>
);

export default JobActions;
