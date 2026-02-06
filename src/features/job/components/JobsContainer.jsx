import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { axiosPublic } from "@/lib/axiosPublic";

const JOBS_PREVIEW_COUNT = 6;

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axiosPublic.get("/jobs");
        setJobs(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const visibleJobs = showAll ? jobs : jobs.slice(0, JOBS_PREVIEW_COUNT);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-15">
      {/* Header */}
      <div className="mb-8 text-center w-full md:w-3/5 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Latest Job Openings
        </h2>
        <p className="text-gray-700 mt-1 text-lg">
          Find the right opportunity that matches your skills, experience, and
          career goals.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && jobs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-medium">No jobs available right now</p>
          <p className="text-sm mt-1">Please check back later</p>
        </div>
      )}

      {/* Jobs */}
      {!loading && jobs.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          {/* See all button */}
          {!showAll && jobs.length > JOBS_PREVIEW_COUNT && (
            <div className="my-10 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="
      px-6 py-3 rounded-lg 
      bg-blue-500 text-white font-medium 
      cursor-pointer
      transition-all duration-300 ease-out
      hover:bg-blue-700 
      hover:-translate-y-1
    "
              >
                See all jobs
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default JobsContainer;
