import ApplyJobForm from "@/features/application/components/ApplyJobForm";
import { useLoaderData } from "react-router";

const ApplyJobPage = () => {
  const { data : jobData } = useLoaderData();
  const job = jobData?.data;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Apply for {job.title}
        </h1>
        <p className="text-gray-500 mt-1">
          {job.company} • {job.location}
        </p>
      </div>

      {/* Application Form */}
      <ApplyJobForm jobId={job._id} />
    </div>
  );
};

export default ApplyJobPage;
