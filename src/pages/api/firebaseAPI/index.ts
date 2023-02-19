import { queryDatabase } from "@/services/firebaseService/helpers";

export const getAllJobs = async () => {
  try {
    const result = await queryDatabase("listing/jobs");
    return result;
  } catch (error) {
    console.error("Error querying database: ", error);
  }
};
