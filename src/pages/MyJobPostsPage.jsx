import MyJobPosts from "@/features/job/components/MyJobPosts";
import { useLoaderData } from "react-router";

const MyJobPostsPage = () => {
  const {data : jobs} = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">
        My Job Posts
      </h2>

      <div className="overflow-x-auto bg-base-100 rounded-xl border border-base-300">
        <table className="table table-zebra">
          
          {/* Table Head */}
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Job</th>
              <th>Location</th>
              <th>Type</th>
              <th>Salary</th>
              <th>Status</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {jobs.map((job, index) => (
              <MyJobPosts
                key={job._id}
                job={job}
                index={index}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyJobPostsPage;
