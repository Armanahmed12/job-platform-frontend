import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import JobFormFields from "./JobFormFields";
import useAuth from "@/features/auth/hooks/useAuth";
import useAddJob from "@/features/job/hooks/useAddJob";

const AddJobForm = () => {
  const { user } = useAuth();
  const { addJob } = useAddJob();
  // const navigate = useNavigate();

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

        // navigate("/myPostedJobs");
      }
    } catch (error) {
      Swal.fire("Error", "Could not add job", error);
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
