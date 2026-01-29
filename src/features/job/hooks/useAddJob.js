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

    const splitLines = value =>
  value
    .split(/\n|,/)
    .map(item => item.trim())
    .filter(Boolean);

jobData.requirements = splitLines(jobData.requirements);
jobData.responsibilities = splitLines(jobData.responsibilities);

  
    const res = await axiosPublic.post("/jobs", jobData);

    return res.data;
  };

  return { addJob };
};

export default useAddJob;
