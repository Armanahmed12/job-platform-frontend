import axiosSecure from "@/lib/axiosSecure";
import React, { useRef } from "react";
import {
  HiUser,
  HiMail,
  HiPhone,
  HiLink,
  HiPencilAlt,
  HiCheckCircle,
} from "react-icons/hi";
import Swal from "sweetalert2";

const ApplyJobForm = ({ jobId }) => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formElement = formRef.current;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    data.status = "pending";
    data.jobId = jobId;

    try {
      const { data: result } = await axiosSecure.post("/applications", data);

      await Swal.fire({
        icon: "success",
        title: "Application Sent! 🎉",
        text:
          result?.message ||
          "Your application has been submitted successfully. Our team will review it and get back to you soon.",
        confirmButtonText: "Awesome!",
        confirmButtonColor: "#4f46e5",
      });

      formElement.reset();
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong while submitting your application. Please try again.";

      await Swal.fire({
        icon: "error",
        title: "Submission Failed 😕",
        text: message,
        confirmButtonText: "Try Again",
        confirmButtonColor: "#dc2626",
      });

      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] relative flex items-center justify-center p-6 py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[30%] h-[50%] bg-indigo-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[50%] bg-blue-50/80 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-3xl w-full bg-white relative rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-300/60 overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-12 pb-8 text-center border-b border-slate-50">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
            <HiCheckCircle className="text-sm" /> Careers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Submit Your <span className="text-indigo-600">Application</span>
          </h2>
          <p className="text-slate-500 mt-3 text-lg font-medium">
            Join our mission. Fill out the form below to get started.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="p-8 md:p-12 space-y-10"
        >
          {/* Personal Details */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Full Name
                </label>
                <div className="relative group">
                  <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Arman Ahmed"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-blue-300 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-800"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Email Address
                </label>
                <div className="relative group">
                  <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-blue-300 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-800"
                  />
                </div>
              </div>

              <div className="form-control md:col-span-2">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Phone Number
                </label>
                <div className="relative group">
                  <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-blue-300 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resume / Portfolio */}
          <div className="space-y-6">
            <div className="form-control">
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Resume / Portfolio Link
              </label>
              <div className="relative group">
                <HiLink className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                <input
                  type="url"
                  name="resumeOrPortfolioUrl"
                  required
                  placeholder="https://drive.google.com/..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-blue-300 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="space-y-6">
            <div className="form-control">
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Cover Letter / Note
              </label>
              <div className="relative group">
                <HiPencilAlt className="absolute left-4 top-4 text-indigo-400 group-focus-within:text-indigo-600 transition-colors text-lg" />
                <textarea
                  name="coverLetter"
                  defaultValue={
                    "I am passionate about web development and have 3 years of experience in full-stack projects. I believe I would be a great fit for this role."
                  }
                  rows="4"
                  placeholder="Share a bit about your experience..."
                  className="w-full pl-11 pr-4 py-4 rounded-xl border border-blue-300 bg-slate-50/30 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-800 resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex flex-col items-center gap-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Send Application
            </button>
            <p className="text-[11px] text-slate-400 text-center font-medium uppercase tracking-widest leading-loose">
              By clicking "Send Application", you agree to our <br />
              <span className="text-indigo-600 cursor-pointer hover:underline">
                privacy policy
              </span>{" "}
              and{" "}
              <span className="text-indigo-600 cursor-pointer hover:underline">
                recruitment terms
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobForm;
