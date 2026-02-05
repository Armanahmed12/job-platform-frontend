import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../../pages/Home";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import JobDetailPage from "@/pages/JobDetailPage";
import ProtectedRoute from "./ProtectedRoute";
// import { axiosPublic } from "@/lib/axiosPublic";
import AddJobPage from "@/pages/AddJobPage";
import { axiosPublic } from "@/lib/axiosPublic";
import MyJobPostsPage from "@/pages/MyJobPostsPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:jobId",
        element: (
          <ProtectedRoute>
            <JobDetailPage />
          </ProtectedRoute>
        ),
        loader: async ({ params }) => {
          try {
            const response = await axiosPublic.get(`/jobs/${params.jobId}`);
            return response.data; // ✅ parsed data
          } catch (error) {
            console.error("Error fetching job:", error);
            throw error; // this will trigger React Router's errorElement if defined
          }
        },
      },
      {
        path: "/add-job",
        element: <ProtectedRoute>
           <AddJobPage />
        </ProtectedRoute>,
      },
      {
        path : "/jobs/my-job-posts",
        element: <MyJobPostsPage/>
      }
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;

// {
//       path : "/jobs/:jobId",
//       element: <ProtectedRoute>
//          <JobDetailPage/>
//       </ProtectedRoute>,
//       loader: ({params})=> fetch(`http://192.168.0.108:3000/api/v1/jobs/${params.jobId}`)
//     },
