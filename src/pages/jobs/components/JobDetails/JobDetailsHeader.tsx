import TailwindButton from "@/components/Buttons/TailwindButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobActions from "../JobActions";
import { faBookmark as unbookmarked } from "@fortawesome/free-regular-svg-icons";
import { JobsContextDataInterface } from "../../interfaces";
import { dayHoursDifference } from "@/utils";
import { Suspense, useEffect } from "react";

const JobDetailsHeader: React.FC<JobsContextDataInterface> = ({
  selectedJob,
}) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${selectedJob?.company?.banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return selectedJob ? (
    <div className="jobDetails-header w-full">
      <div
        className={`jobDetails-header-title flex flex-col justify-between font-bold text-[.9rem] bg-cover bg-center sm:h-[300px] md:h-[300px] rounded-tl-3xl rounded-tr-3xl text-white px-6 py-8 relative`}
        style={bannerStyle}
      >
        <div className="leading-none">
          <div className="flex justify-between">
            <span className="text-[2.2rem] leading-none mb-3">
              {selectedJob?.title}
            </span>
            <span className="text-[2rem] leading-tight">
              <TailwindButton
                action="onClick"
                iconRight={<FontAwesomeIcon icon={unbookmarked} />}
              />
            </span>
          </div>

          <div className="leading-6">
            <span className="">Job Posted by </span>
            <span className=" underline underline-offset-4">
              {selectedJob?.company?.name}
            </span>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row mt-10 md:mt-0">
          <div className="jobDetails-time-applicants flex flex-col w-2/4">
            <span className="leading-none mb-1 text-[1.1rem]">
              {dayHoursDifference(selectedJob?.publishDate).diffHours} Hours ago
              | {selectedJob?.applicants?.length} Applicant
              {selectedJob?.applicants &&
                selectedJob.applicants.length > 1 &&
                "s"}
            </span>
            <span className="leading-tight mt-1">Kuala Lumpur, Malaysia</span>
          </div>

          <JobActions />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default JobDetailsHeader;
