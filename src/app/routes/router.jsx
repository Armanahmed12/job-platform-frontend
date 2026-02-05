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
import axiosSecure from "@/lib/axiosSecure";
import { ensureAccessToken } from "@/lib/ensureAccessToken";
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
        loader: ({ params }) => axiosPublic.get(`/jobs/${params.jobId}`),
      },
      {
        path: "/add-job",
        element: (
          <ProtectedRoute>
            <AddJobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs/my-job-posts",
        element: (
          <ProtectedRoute>
            <MyJobPostsPage />
          </ProtectedRoute>
        ),
        loader: async () => {
          await ensureAccessToken();
          // setLoading(false);
          const res = await axiosSecure.get("/jobs/my");
          return res.data;
        },
      },
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
