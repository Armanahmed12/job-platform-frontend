const MyJobPosts = ({ job, index }) => {
  const {
    title,
    company,
    location,
    jobType,
    salaryRange,
    status,
  } = job;

  return (
    <tr
      className="
        group
        relative
        cursor-pointer
        transition-all
        duration-200
        hover:bg-base-200
      "
    >
      {/* Left accent bar */}
      <td className="relative pl-0">
        <span className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 group-hover:opacity-100 transition" />
        <span className="pl-4 font-semibold text-base-content/80">
          {index + 1}
        </span>
      </td>

      {/* Job */}
      <td>
        <div>
          <p className="font-semibold text-base-content group-hover:text-primary transition">
            {title}
          </p>
          <p className="text-sm text-gray-500">
            {company}
          </p>
        </div>
      </td>

      {/* Location */}
      <td className="text-sm">
        {location}
      </td>

      {/* Type */}
      <td>
        <span className="badge badge-outline badge-sm">
          {jobType}
        </span>
      </td>

      {/* Salary */}
      <td className="font-medium text-sm">
        {salaryRange.min}–{salaryRange.max}{" "}
        {salaryRange.currency.toUpperCase()}
      </td>

      {/* Status */}
      <td>
        <span
          className={`badge badge-sm ${
            status === "active"
              ? "badge-success"
              : "badge-error"
          }`}
        >
          {status}
        </span>
      </td>

      {/* Action */}
      <td className="text-right">
        <button
          className="
            btn
            btn-xs
            btn-ghost
            text-primary
            opacity-0
            group-hover:opacity-100
            transition
          "
        >
          View Applications
        </button>
        <p className="text-xs text-gray-500 mt-1">
          0 applications
        </p>
      </td>
    </tr>
  );
};

export default MyJobPosts;
