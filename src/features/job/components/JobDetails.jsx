import Loading from "@/components/common/Loading";
import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router";

const JobDetails = ({ jobData }) => {
  if (!jobData) {
    return <Loading />;
  }

  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = jobData;

  const formattedDeadline = new Date(applicationDeadline).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center border-2 border-blue-500 md:items-start bg-base-100 shadow-xl rounded-xl p-6 gap-6">
        <img
          src={company_logo}
          alt={company}
          className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-md border-2 border-gray-300"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-primary mb-2">{title}</h1>
          <p className="text-lg text-gray-500 flex items-center gap-2">
            <FaBuilding /> {company}
          </p>
          <p className="text-gray-500 flex items-center gap-2 mt-1">
            <FaMapMarkerAlt /> {location}
          </p>
          <span className="badge badge-info font-semibold text-white text-xs">
            {jobType}
          </span>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="card bg-base-100 shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center border-2 border-blue-500">
          <FaClock className="text-2xl text-primary mb-2" />
          <p className="text-gray-500">Deadline</p>
          <p className="font-semibold">{formattedDeadline}</p>
        </div>
        <div className="card bg-base-100 shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center border-2 border-blue-500">
          <FaMoneyBillWave className="text-2xl text-primary mb-2" />
          <p className="text-gray-500">Salary</p>
          <p className="font-semibold">
            {salaryRange.currency.toUpperCase()}{" "}
            {salaryRange.min.toLocaleString()} -{" "}
            {salaryRange.max.toLocaleString()}
          </p>
        </div>
        <div className="card bg-base-100 shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center border-2 border-blue-500">
          <FaBuilding className="text-2xl text-primary mb-2" />
          <p className="text-gray-500">Category</p>
          <p className="font-semibold">{category}</p>
        </div>
        <div className="card bg-base-100 shadow hover:shadow-lg transition p-4 flex flex-col items-center justify-center border-2 border-blue-500">
          <FaEnvelope className="text-2xl text-primary mb-2" />
          <p className="text-gray-500">HR Contact</p>
          <p className="font-semibold">{hr_name}</p>
        </div>
      </div>

      {/* Job Description & Apply Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Job Description
            </h2>
            <p className="text-gray-700">{description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Requirements
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar Apply Card */}
        <div className="sticky top-24 bg-base-200 shadow-blue-300 shadow-xl rounded-xl p-6 flex flex-col gap-4 justify-center text-left border-2 border-blue-500">
          <h2 className="text-xl font-bold text-primary">Apply for this job</h2>
          <p>
            <span className="font-semibold">HR:</span> {hr_name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {hr_email}
          </p>
          <p>
            <span className="font-semibold">Deadline:</span> {formattedDeadline}
          </p>
          <div className="inline-block group mt-4">
            <Link to={`/apply-job/${jobData._id}`}>
              <button className=" btn bg-blue-500 hover:bg-blue-700 text-white btn-block  transform transition-transform duration-300 group-hover:-translate-y-1.5 shadow-lg shadow-blue-300 border-none">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
