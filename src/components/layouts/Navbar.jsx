import React from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { axiosPublic } from "@/lib/axiosPublic"; // adjust path if needed
import Loading from "../common/Loading";
import useAuth from "@/features/auth/hooks/useAuth";

const Navbar = () => {
  const { user, loading, logout, isAuthenticated } =
    useAuth();

  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          className="hover:bg-white hover:text-black rounded mr-2"
          to="/"
        >
          Home
        </NavLink>
      </li>

      {isAuthenticated && (
        <>
          <li>
            <NavLink
              className="hover:bg-white hover:text-black rounded mr-2"
              to="/my-applications"
            >
              My Applications
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:bg-white hover:text-black rounded mr-2"
              to="/add-job"
            >
              Add Job
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:bg-white hover:text-black rounded mr-2"
              to="/jobs/my-job-posts"
            >
              My Job Posts
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const authButtons = (
    <>
      <NavLink className="btn mr-2" to="/auth/register">
        Register
      </NavLink>
      <NavLink className="btn" to="/auth/login">
        Login
      </NavLink>
    </>
  );

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Log out?",
      text: "Are you sure you want to log out from your account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      // 1️⃣ Invalidate refresh token (backend)
      await axiosPublic.post("/auth/logout");

      // 2️⃣ Clear frontend auth state
      await logout();

      // 3️⃣ Feedback + redirect
      await Swal.fire({
        title: "Logged out",
        text: "You have been logged out successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/", { replace: true });
    } catch (error) {
      // ⚠️ Fail-safe: still log out locally
      await logout();

      await Swal.fire({
        title: "Logged out",
        text: "You have been logged out.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/", { replace: true });
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="navbar bg-blue-600 text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-blue-600">
            {links}
          </ul>
        </div>

        <span className="text-2xl font-bold text-white">
          JobBridge
        </span>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {loading ? (
          <Loading />
        ) : user ? (
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          authButtons
        )}
      </div>
    </div>
  );
};

export default Navbar;
