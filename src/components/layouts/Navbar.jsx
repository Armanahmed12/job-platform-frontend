import React, { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../app/providers/AuthContext";
import Loading from "../common/Loading";
import { axiosPublic } from "@/lib/axiosPublic";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className="hover:bg-white hover:text-black rounded mr-2"
          to={"/"}
        >
          Home
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
          {" "}
          My Job Posts{" "}
        </NavLink>
      </li>
    </>
  );
  const authButtons = (
    <>
      <NavLink className="btn mr-2" to={"/auth/register"}>
        Register
      </NavLink>
      <NavLink className="btn" to={"/auth/login"}>
        Login
      </NavLink>
    </>
  );
  const handleLogout = async () => {
  Swal.fire({
    title: "Log out?",
    text: "Are you sure you want to log out from your account?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, log out",
    cancelButtonText: "Cancel",
  }).then(async (result) => {
    if (!result.isConfirmed) return;

    try {
      // 1️⃣ Invalidate refresh token (backend)
      await axiosPublic.post("/auth/logout");

      // 2️⃣ Clear frontend auth state
      await logout();

      // 3️⃣ Feedback
      Swal.fire({
        title: "Logged out",
        text: "You have been logged out successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      // ⚠️ Fail-safe: still log out locally
      await logout();

      Swal.fire({
        title: "Logged out",
        text: "You have been logged out.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      console.error("Logout error:", error);
    }
  });
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl font-bold text-white "> JobBridge </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <Loading></Loading>
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
