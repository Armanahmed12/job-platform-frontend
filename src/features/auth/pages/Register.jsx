import React from "react";
import AnimatedIcon from "../../../components/common/AnimatedIcon";
import registerAnimation from '../../../assets/lottie/Register.json'

const Register = () => {

  const handleRegisterSubmit = (e) =>{

      e.preventDefault();
      const formEntries = new FormData(e.target);
      const formDataObject  = Object.fromEntries(formEntries);
      console.log(formDataObject );     

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col sm:flex-row-reverse">
        <div className="text-center lg:text-left">
         
           <AnimatedIcon animation={registerAnimation} size={250}></AnimatedIcon>
         
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegisterSubmit}>
               <h1 className="text-3xl font-bold text-center mb-7">Create an Account</h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email"
                name="email"
                className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Create Account</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
