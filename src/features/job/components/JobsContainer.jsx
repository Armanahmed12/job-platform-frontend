import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { axiosPublic } from "@/lib/axiosPublic";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading, user] = useState(true);

  useEffect(() => {
    axiosPublic.get("/jobs")
      .then(jobPosts => {
        setJobs(jobPosts.data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  });

  return (
    <section className="max-w-7xl mx-auto px-4 pt-15">
      
      {/* Header */}
      <div className="mb-8 text-center w-3/5 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Latest Job Openings
        </h2>
        <p className="text-gray-700 mt-1 text-lg mb-8">
          Find the right opportunity that matches your skills, experience, and career goals, and discover roles that value your talent, support your growth, and align with your ambitions.
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && jobs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-medium">
            No jobs available right now
          </p>
          <p className="text-sm mt-1">
            Please check back later
          </p>
        </div>
      )}

      {/* Jobs grid */}
      {!loading && jobs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobsContainer;
