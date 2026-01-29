import React from "react";

const Input = ({ label, ...props }) => (
  <div className="flex flex-col">
    {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
    <input
      {...props}
      className="input input-bordered focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all rounded-md"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="flex flex-col ">
    {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
    <textarea
      {...props}
      className="textarea textarea-bordered focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all rounded-md focus:outline-none"
    />
  </div>
);

const Select = ({ label, children, ...props }) => (
  <div className="flex flex-col">
    {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
    <select
      {...props}
      className="select select-bordered focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all rounded-md focus:outline-none"
    >
      {children}
    </select>
  </div>
);

const JobFormFields = ({ onSubmit, userEmail }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 mt-6 shadow-xl shadow-blue-300 border-2 border-blue-200 my-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-15 text-center">
        Post a New Job
      </h2>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Job Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input
            name="title"
            label="Job Title"
            placeholder="Job Title"
            required
          />
          <Input
            name="location"
            label="Location"
            placeholder="Job Location"
            required
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Select name="jobType" label="Job Type" required>
            <option value="">Select Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Intern</option>
          </Select>

          <Select name="category" label="Job Field" required>
            <option value="">Select Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </Select>
        </div>

        {/* Salary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Input
            name="min"
            label="Min Salary"
            placeholder="Min Salary"
            required
          />
          <Input
            name="max"
            label="Max Salary"
            placeholder="Max Salary"
            required
          />
          <Select name="currency" label="Currency" required>
            <option value="">Currency</option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
          </Select>
        </div>

        {/* Description */}
        <Textarea
          name="description"
          label="Job Description"
          placeholder="Describe the job..."
          required
        />

        {/* Requirements & Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Requirements */}
          <div>
            <Textarea
              id="requirements"
              name="requirements"
              label="Requirements"
              placeholder="Put each requirement on a new line"
              required
              aria-describedby="requirements-tip"
            />
            <p id="requirements-tip" className="text-sm text-gray-500 mt-2">
              <span className="font-semibold">Tip:</span> Press Enter or use
              commas to separate each point.
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <Textarea
              id="responsibilities"
              name="responsibilities"
              label="Responsibilities"
              placeholder="Put each responsibility on a new line"
              required
              aria-describedby="responsibilities-tip"
            />
            <p id="responsibilities-tip" className="text-sm text-gray-500 mt-2">
              <span className="font-semibold">Tip:</span> Press Enter or use
              commas to separate each point.
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input
            name="company"
            label="Company Name"
            placeholder="Company Name"
            required
          />
          <Input
            name="company_logo"
            label="Company Logo URL"
            placeholder="Logo URL"
            required
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input
            name="hr_name"
            label="HR Name"
            placeholder="HR Name"
            required
          />
          <Input
            name="hr_email"
            label="HR Email"
            defaultValue={userEmail}
            placeholder="HR Email"
            required
          />
        </div>

        {/* Application Deadline */}
        <Input
          type="date"
          name="applicationDeadline"
          label="Application Deadline"
          required
        />

        <div className="group mt-10 mb-5">
          <button className="w-full btn bg-blue-500 hover:bg-blue-700 text-white transform transition-transform duration-300 group-hover:-translate-y-1.5 shadow-lg shadow-blue-300 border-none">
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobFormFields;
