import { motion } from "framer-motion";
import { useJobsContext } from "../../context/JobContext";
import JobDetailsBody from "./JobDetailsBody";
import JobDetailsFooter from "./JobDetailsFooter";
import JobDetailsHeader from "./JobDetailsHeader";

const JobDetails: React.FC = () => {
  const { selectedJob } = useJobsContext();

  return selectedJob?.id ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="jobDetails-container flex flex-col w-full h-full bg-[#F5F5F5] rounded-3xl"
    >
      <JobDetailsHeader selectedJob={selectedJob} />
      <JobDetailsBody selectedJob={selectedJob} />
      <JobDetailsFooter selectedJob={selectedJob} />
    </motion.div>
  ) : (
    <></>
  );
};

export default JobDetails;
