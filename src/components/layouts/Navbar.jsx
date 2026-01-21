import React, { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../app/providers/AuthContext";
import Loading from "../common/Loading";

const Navbar = () => {
  const { user, loading, logoutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
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
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log(
          error,
          "failed to sign out .stay here. dont leave me alone",
        );
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
