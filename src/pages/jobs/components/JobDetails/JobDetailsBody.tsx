import { JobsContextDataInterface } from "../../interfaces";

const JobDetailsBody: React.FC<JobsContextDataInterface> = ({
  selectedJob,
}) => {
  return (
    <>
      <div className="jobDetails-body w-full p-12">
        <div className="flex justify-start">
          <span className="w-2/4 font-bold text-[1.5rem]">Employment Type</span>
          <span className="w-2/4 font-bold text-[1.5rem]">Salary Range</span>
        </div>

        <div className="flex justify-start">
          <div className="w-2/4">
            <span className="font-bold text-[1rem] rounded-md bg-[#FD6404] px-3 py-1">
              {selectedJob?.type}
            </span>
          </div>
          <span className="w-2/4 font-medium text-[1rem]">
            {selectedJob?.salary?.currency}{" "}
            {selectedJob?.salary?.min &&
              parseFloat(selectedJob.salary.min).toFixed(2)}{" "}
            - {selectedJob?.salary?.currency}{" "}
            {selectedJob?.salary?.min &&
              parseFloat(selectedJob.salary.max).toFixed(2)}{" "}
          </span>
        </div>
      </div>

      <div className="jobDetails-body w-full p-12">
        <div className="flex justify-start">
          <span className="w-2/4 font-bold text-[1.5rem]">Education Level</span>
          <span className="w-2/4 font-bold text-[1.5rem]">Working Days</span>
        </div>

        <div className="flex justify-start">
          <div className="w-2/4">
            <span className="font-bold text-[1rem] rounded-md bg-[#FDB000] px-3 py-1">
              {selectedJob?.education}
            </span>
          </div>

          <div className="w-2/4">
            <span className="font-medium text-[1rem]">
              {selectedJob?.workingDays}
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-[5rem]">
          <span className="font-bold text-[1.5rem]">Experience Level</span>
          <span className="font-bold text-[1rem] rounded-md bg-[#A6E6FF] w-fit px-3 py-1">
            Intermediate/Junior (1 - 2 Years of Experience)
          </span>
        </div>

        <div className="mt-[5rem] px-8 py-12 bg-[#f0eae0] rounded-3xl shadow-xl">
          <span className="font-bold text-[1.5rem]">The Role</span>
          <p className="mt-3 text-medium text-[1rem]">
            {selectedJob?.role?.about}
          </p>

          <div className="mt-[3rem]">
            <span className="font-bold text-[1.5rem]">Responsibilities</span>
            <ul className="list-disc list-inside font-medium text-[1rem]">
              {selectedJob?.role?.responsibilities.map((responsibility, i) => (
                <li key={i} className="mt-4 md:ml-4">{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsBody;
