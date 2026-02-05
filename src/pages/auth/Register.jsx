import React, { useContext } from "react";
import AnimatedIcon from "../../components/common/AnimatedIcon";
import registerAnimation from "../../assets/lottie/Register.json";
import AuthContext from "../../app/providers/AuthContext";
import Swal from "sweetalert2";
import { NavLink, useLocation, useNavigate } from "react-router";
import SocialLoginButtons from "../../features/auth/components/SocialLoginButtons";
import { axiosPublic } from "@/lib/axiosPublic";

const Register = () => {
  const { createUser, saveAccessToken } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegisterSubmit = async (e) => {
  e.preventDefault();

  try {
    const formEntries = new FormData(e.target);
    const { email, password } = Object.fromEntries(formEntries);

    // 1️⃣ Create Firebase user
    const result = await createUser(email, password);
    const user = result.user;

    // 2️⃣ Get Firebase ID Token (VERY IMPORTANT)
    const idToken = await user.getIdToken();

    // 3️⃣ Send token to backend
  const res =  await axiosPublic.post(
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
    // 4️⃣ Success UI
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Account created successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    // 5️⃣ Redirect
    navigate(from, { replace: true });

  } catch (error) {
    console.error("Register error:", error.message);

    Swal.fire({
      icon: "error",
      title: "Registration failed",
      text: error.message,
    });
  }
};

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col sm:flex-row-reverse py-10">
        <div className="text-center lg:text-left">
          <AnimatedIcon animation={registerAnimation} size={250}></AnimatedIcon>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pb-3">
          <div className="card-body">
            <form onSubmit={handleRegisterSubmit}>
              <h1 className="text-3xl text-blue-700 font-bold text-center mb-7">
                Create an Account
              </h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  defaultValue={'0pok97as'}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-primary mt-4">Create Account</button>
              </fieldset>
            </form>
            <div className="divider divider-neutral w-full mx-auto gap-2 before:bg-[#00040b53] after:bg-[#00040b53]">OR</div>
            <SocialLoginButtons from={from}/>
            <p className="text-center text-gray-500 ">Have an account? <span className="text-blue-600 font-bold underline text-lg"><NavLink to={"/auth/login"} state={{ from: location.state?.from }}>Login</NavLink></span> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
