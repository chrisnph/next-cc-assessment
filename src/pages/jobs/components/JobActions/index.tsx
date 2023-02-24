import JobApply from "./JobApply";
import JobShare from "./JobShare";

const JobActions: React.FC = () => (
  <div className="jobDetails-actions flex justify-center md:justify-end items-end w-[420px] sm:mt-5">
    <div className="block md:flex w-fit">
      <div className="mt-5 justify-center md:mt-0 md:w-1/2">
        <JobApply />
      </div>
      <div className="w-full my-3 md:mt-0 md:w-1/2">
        <JobShare />
      </div>
    </div>
  </div>
);

export default JobActions;
