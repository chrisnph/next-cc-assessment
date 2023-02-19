import { Dispatch, SetStateAction } from "react";

export interface JobsInterface {
  id: string;
  title: string;
  type: string;
  salary: {
    min: string;
    max: string;
    currency: string;
  };
  education: string;
  workingDays: string;
  role: {
    about: string;
    responsibilities: [string];
  };
  company: {
    name: string;
    about: string;
    avatar: string;
    banner: string;
  };
  publishDate: string;
  applicants: [
    {
      userID: string;
    }
  ];
  perks: string;
}

export interface JobsCardProps {
  jobInfo: JobsInterface;
}

export interface JobsContextProps {
  children: React.ReactNode;
}

export interface JobsContextDataInterface {
  jobs?: JobsInterface[];
  isLoading?: boolean;
  selectedJob?: Partial<JobsInterface>;
  setSelectedJob?: Dispatch<SetStateAction<Partial<JobsInterface>>>;
}
