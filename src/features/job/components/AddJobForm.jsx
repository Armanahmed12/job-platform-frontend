import Swal from "sweetalert2";
import JobFormFields from "./JobFormFields";
import useAuth from "@/features/auth/hooks/useAuth";
import useAddJob from "@/features/job/hooks/useAddJob";
import axios from "axios";
const AddJobForm = () => {
  const { user } = useAuth();
  const { addJob } = useAddJob();

const handleAddJob = async (e) => {
  e.preventDefault();

  try {
    const result = await addJob(e.target);

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Job has been added!",
        timer: 1500,
        showConfirmButton: false,
      });
      // ✅ clear form
      e.target.reset();
    }

  } catch (error) {
    // ✅ Always check AxiosError
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message =
        error.response?.data?.message || "Something went wrong";

      // 🔒 Forbidden
      if (status === 403) {
        Swal.fire({
          icon: "error",
          title: "Access Denied",
          text: message, // "You are not allowed to add job"
        });
        return;
      }
      // 💥 Other server errors
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });

    } else {
      // ❌ Non-Axios error
      Swal.fire({
        icon: "error",
        title: "Unexpected Error",
        text: error.message || "Something went wrong!",
      });
    }
  }
};


  return (
    <JobFormFields
      onSubmit={handleAddJob}
      userEmail={user?.email}
    />
  );
};

export default AddJobForm;
