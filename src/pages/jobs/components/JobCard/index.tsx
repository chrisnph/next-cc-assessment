import Image from "next/image";
import { motion } from "framer-motion";
import { JobsCardProps } from "../../interfaces";
import { useJobsContext } from "../../context/JobContext";
import { useRef, useState } from "react";
import Modal from "@/components/Modal";
import JobDetails from "../JobDetails";

const JobCard: React.FC<JobsCardProps> = ({ jobInfo }) => {
  const { jobs, setSelectedJob, selectedJob } = useJobsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const salaryRange = `${jobInfo?.salary?.currency} ${parseFloat(
    jobInfo?.salary?.min
  ).toFixed(2)} - ${jobInfo?.salary?.currency} ${
    parseFloat(jobInfo?.salary?.max).toFixed(2) || "-"
  }`;

  const handleJobClicks = () => {
    const currentJob = jobs?.find((job) => job.id == jobInfo.id);

    if (jobs && setSelectedJob && currentJob) {
      setSelectedJob(currentJob);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal width="full" height="full" onClose={handleModalClose}>
          <JobDetails />
        </Modal>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="jobCard-container flex items-center justify-center w-full bg-[#F5F5F5] rounded-3xl md:px-4 py-3 mb-5 md:min-w-[340px] sm:max-w-[400px] min-h-[180px] max-h-[180px] cursor-pointer "
        onClick={() => {
          handleJobClicks();
          window.innerWidth < 850 && setIsModalOpen(true);
        }}
      >
        <div className="jobCard-image w-1/4 flex justify-center items-center">
          <Image
            src={jobInfo?.company?.avatar}
            width={60}
            height={60}
            alt="Anaabu Studios"
            className="h-[60px] w-[60px] rounded-full "
          />
        </div>
        <div className="jobCard-info w-3/4 flex-1 flex-wrap md:pl-3">
          <div className="jobCard-info-title font-bold text-[1.2rem]">
            {jobInfo?.title}
          </div>
          <div className="jobCard-info-company font-semibold text-[.8rem]">
            {jobInfo?.company?.name}
          </div>
          <div className="jobCard-info-type pt-3">{jobInfo?.type}</div>
          <div className="jobCard-info-salary">{salaryRange}</div>
        </div>
      </motion.div>
    </>
  );
};

export default JobCard;
