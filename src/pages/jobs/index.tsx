import NavBar from "@/components/NavBar";
import JobCard from "./components/JobCard";
import JobDetails from "./components/JobDetails";
import { useJobsContext } from "./context/JobContext";

const Jobs: React.FC = () => {
  const { jobs } = useJobsContext();

  return jobs ? (
    <div className="container-jobs">
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 bg-[#F5F5F5] w-full">
          <div className="lg:mx-[2rem] h-[60px] flex items-center">
            <NavBar />
          </div>
        </div>
        <div className="bg-gradient-to-br from-[#EDE5D8] to-[#f5f0e8] ">
          <div className="flex-1 flex flex-wrap lg:mx-[3rem]">
            <div className="jobs-left w-full md:w-2/5 lg:w-1/5 bg-transparent px-4 md:px-8 py-8 flex flex-col items-center md:min-w-[350px]">
              {jobs.map((job) => (
                <JobCard key={job.id} jobInfo={job} />
              ))}
            </div>
            <div className="jobs-right md:w-3/5 lg:w-4/5 flex-1 mt-100 ml-auto px-4 py-8 bg-transparent hidden md:block">
              <JobDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Jobs;
