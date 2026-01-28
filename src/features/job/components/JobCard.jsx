import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;

  return (
    <div
      className="relative rounded-xl border-2 border-gray-300 
        bg-white p-5 shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl
      "
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={company_logo}
          alt={company}
          className="w-14 h-14 rounded-md bg-white p-1 object-contain"
        />

        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            {company}
          </h4>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>
          <span className="badge badge-info font-semibold  text-white text-xs">NEW</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {requirements.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="
                text-xs px-2 py-1 rounded-md
                bg-gray-200 text-gray-950
                
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <p className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <FaDollarSign />
          {salaryRange.min} – {salaryRange.max} {salaryRange.currency}
        </p>

        <Link to={`/jobs/${_id}`}>
          <button
            className="
              btn btn-sm rounded-md
              bg-blue-600 text-white border-none
              hover:bg-green-700
              transition-colors duration-300
            "
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
