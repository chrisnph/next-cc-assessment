import { getAllJobs } from "@/pages/api/firebaseAPI";
import { createContext, useContext, useState, useEffect } from "react";
import {
  JobsContextDataInterface,
  JobsContextProps,
  JobsInterface,
} from "../interfaces";

const JobsContext = createContext<JobsContextDataInterface>({
  jobs: [],
  isLoading: true,
  selectedJob: {},
  setSelectedJob: () => {},
});

export const JobsProvider: React.FC<JobsContextProps> = ({ children }) => {
  const [jobs, setJobs] = useState<JobsInterface[]>([]);
  const [selectedJob, setSelectedJob] = useState<Partial<JobsInterface>>({
    id: "",
    title: "",
    type: "",
    salary: {
      min: "",
      max: "",
      currency: "",
    },
    education: "",
    workingDays: "",
    role: {
      about: "",
      responsibilities: [""],
    },
    company: {
      name: "",
      about: "",
      avatar: "",
      banner: "",
    },
    publishDate: "",
    applicants: [{ userID: "" }],
    perks: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const handleFetchJobs = async () => {
    const jobs = await getAllJobs();
    if (jobs) {
      setJobs(jobs as JobsInterface[]);
      setIsLoading(false);
      setSelectedJob(jobs[0]);
    }
  };

  useEffect(() => {
    handleFetchJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{ jobs, selectedJob, setSelectedJob, isLoading }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobsContext = () => {
  return useContext(JobsContext);
};
