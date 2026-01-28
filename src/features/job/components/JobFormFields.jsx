import React from 'react';

const JobFormFields = ({ onSubmit, userEmail }) => {
  return (
    <div>
      <h2 className="text-3xl mb-6">Post a new Job</h2>

      <form onSubmit={onSubmit} className="card-body space-y-4">
        {/* Job title */}
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="input input-bordered"
          required
        />

        {/* Job location */}
        <input
          type="text"
          name="location"
          placeholder="Job Location"
          className="input input-bordered"
          required
        />

        {/* Job Type */}
        <select name="jobType" className="select select-bordered" required>
          <option value="">Pick a Job type</option>
          <option>Full-time</option>
          <option>Intern</option>
          <option>Part-time</option>
        </select>

        {/* Job Field */}
        <select name="category" className="select select-bordered" required>
          <option value="">Pick a Job Field</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Teaching</option>
        </select>

        {/* Salary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <input name="min" placeholder="Min Salary" className="input input-bordered" required />
          <input name="max" placeholder="Max Salary" className="input input-bordered" required />
          <select name="currency" className="select select-bordered" required>
            <option value="">Currency</option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered"
          required
        />

        {/* Company */}
        <input
          name="company"
          placeholder="Company Name"
          className="input input-bordered"
          required
        />

        {/* Requirements */}
        <textarea
          name="requirements"
          placeholder="Put each requirement on a new line"
          className="textarea textarea-bordered"
          required
        />

        {/* Responsibilities */}
        <textarea
          name="responsibilities"
          placeholder="Put each responsibility on a new line"
          className="textarea textarea-bordered"
          required
        />

        {/* HR */}
        <input
          name="hr_name"
          placeholder="HR Name"
          className="input input-bordered"
          required
        />

        <input
          name="hr_email"
          defaultValue={userEmail}
          placeholder="HR Email"
          className="input input-bordered"
          required
        />

        {/* Deadline */}
        <input
          type="date"
          name="applicationDeadline"
          className="input input-bordered"
          required
        />

        {/* Logo */}
        <input
          name="company_logo"
          placeholder="Company Logo URL"
          className="input input-bordered"
          required
        />

        <button className="btn btn-primary mt-4">Submit</button>
      </form>
    </div>
  );
};

export default JobFormFields;
