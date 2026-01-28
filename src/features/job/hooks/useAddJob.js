import { axiosPublic } from "@/lib/axiosPublic";

const useAddJob = () => {
  const addJob = async (formElement) => {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, ...jobData } = data;

    jobData.salaryRange = {
      min,
      max,
      currency,
    };

    jobData.requirements = jobData.requirements.split("\n");
    jobData.responsibilities = jobData.responsibilities.split("\n");

    const res = await axiosPublic.post("/jobs", jobData);
    return res.data;
  };

  return { addJob };
};

export default useAddJob;
