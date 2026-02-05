import React from "react";

import { useLocation, useNavigate } from "react-router";
import loginAnimation from "../../assets/lottie/login.json";
import AnimatedIcon from "../../components/common/AnimatedIcon";
import { NavLink } from "react-router";
import SocialLoginButtons from "../../features/auth/components/SocialLoginButtons";
import { axiosPublic } from "@/lib/axiosPublic";
import useAuth from "@/features/auth/hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, saveAccessToken } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await loginUser(email, password);
    const user = result.user;

    const idToken = await user.getIdToken();

   const res = await axiosPublic.post(
      "/auth/login",
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
    const accessToken = res.data?.accessToken;
    saveAccessToken(accessToken);

    navigate(from, { replace: true });
  } catch (error) {
  console.error("Login error full:", error);
  console.error("Error code:", error.code);

const LOGIN_ERROR_MESSAGES = {
  "auth/invalid-credential": "Invalid email or password",
  "auth/too-many-requests": "Too many attempts. Try again later.",
  "auth/user-disabled": "Your account has been disabled",
  "auth/network-request-failed": "Network error. Check your connection",
};

const message =
  LOGIN_ERROR_MESSAGES[error.code] ||
  "Login failed. Please try again.";

  Swal.fire({
    title: "Login failed",
    text: message,
    icon: "error",
  });
}
};

  return (
    <div className="hero bg-base-200 min-h-screen  justify-center items-center py-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <AnimatedIcon animation={loginAnimation} size={250}></AnimatedIcon>
        </div>
        <div className="card bg-base-100 w-2/3 max-w-sm shrink-0 shadow-2xl pb-4">
          <h1 className="text-3xl font-bold text-center my-4 text-blue-700">
            Login now
          </h1>
          <form onSubmit={handleLogin} className="card-body pb-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered my-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                 defaultValue={'0pok97as'}
                placeholder="password"
                className="input input-bordered mt-2"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full font-bold">
                Login
              </button>
            </div>
          </form>
          <div className="divider divider-neutral w-[95%] mx-auto gap-2 before:bg-[#00040b53] after:bg-[#00040b53]">OR</div>
            <SocialLoginButtons from={from}/>
          <p className="text-center text-gray-500 ">
            Don't have an account?{" "}
            <span className="text-blue-600 font-bold underline text-lg">
              <NavLink
                to={"/auth/register"}
                state={{ from: location.state?.from }}
              >
                Register
              </NavLink>
            </span>{" "}
          </p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
