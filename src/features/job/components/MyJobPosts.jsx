const MyJobPosts = ({ job, index }) => {
  const {
    title,
    company,
    location,
    jobType,
    salaryRange,
    status,
    applicationCount = 0, // Added a default value
  } = job;

  // Dynamic colors based on status
  const statusStyles = {
    active: "bg-emerald-100 text-emerald-700 border-emerald-200",
    closed: "bg-rose-100 text-rose-700 border-rose-200",
    draft: "bg-amber-100 text-amber-700 border-amber-200",
  };

  return (
    <tr
      className="
        group
        transition-all
        duration-300
        hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent
        hover:shadow-[inset_4px_0_0_0_#570df8]
        border-b border-base-200
      "
    >
      {/* Index with a subtle glow on hover */}
      <td className="py-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-base-200 group-hover:bg-primary group-hover:text-primary-content transition-colors font-bold text-xs">
          {index + 1}
        </span>
      </td>

      {/* Job Info */}
      <td className="py-4">
        <div className="flex flex-col">
          <span className="font-bold text-base-content group-hover:text-primary transition-colors">
            {title}
          </span>
          <span className="text-xs uppercase tracking-wider font-medium text-gray-400">
            {company}
          </span>
        </div>
      </td>

      {/* Location with Icon-like feel */}
      <td className="py-4">
        <div className="flex items-center gap-1 text-sm text-base-content/70">
          <span className="text-primary opacity-50">📍</span> {location}
        </div>
      </td>

      {/* Job Type Badge */}
      <td className="py-4">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20 bg-primary/5 text-primary">
          {jobType}
        </span>
      </td>

      {/* Salary - More prominent */}
      <td className="py-4">
        <div className="text-sm font-semibold text-secondary">
          {salaryRange.min.toLocaleString()} – {salaryRange.max.toLocaleString()}
          <span className="ml-1 text-[10px] opacity-70">{salaryRange.currency.toUpperCase()}</span>
        </div>
      </td>

      {/* Status - Custom Styled Badges */}
      <td className="py-4">
        <span className={`px-3 py-1 rounded-md text-xs font-bold border ${statusStyles[status] || statusStyles.active}`}>
          {status.toUpperCase()}
        </span>
      </td>

      {/* Action Area */}
      <td className="py-4 text-right">
        <div className="flex flex-col items-end gap-1">
          <button
            className="
              btn btn-sm btn-primary
              shadow-lg shadow-primary/20
              scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100
              transition-all duration-300
            "
          >
            View Applicants
          </button>
          <span className="text-[10px] font-medium text-gray-400 mr-2">
            {applicationCount} applications
          </span>
        </div>
      </td>
    </tr>
  );
};

export default MyJobPosts;