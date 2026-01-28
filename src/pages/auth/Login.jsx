import React, { useContext } from "react";

import { useLocation, useNavigate } from "react-router";
import AuthContext from "../../app/providers/AuthContext";
import loginAnimation from "../../assets/lottie/login.json";
import AnimatedIcon from "../../components/common/AnimatedIcon";
import { NavLink } from "react-router";
import SocialLoginButtons from "../../features/auth/components/SocialLoginButtons";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log("sign in2", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <AnimatedIcon animation={loginAnimation} size={250}></AnimatedIcon>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-4">
          <h1 className="text-3xl font-bold text-center my-4 text-blue-700">
            Login now
          </h1>
          <form onSubmit={handleLogin} className="card-body">
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
