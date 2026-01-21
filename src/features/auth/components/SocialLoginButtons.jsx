import { FaGoogle, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import { loginWithGoogleService } from "../services/socialAuth";

const socialLogins = [
  { name: "Google", action: loginWithGoogleService, icon: <FaGoogle /> },
  // { name: "Twitter", action: loginWithTwitterService, icon: <FaTwitter /> },
  // { name: "GitHub", action: loginWithGithubService, icon: <FaGithub /> },
  // { name: "Facebook", action: loginWithFacebookService, icon: <FaFacebook /> },
];

const SocialLoginButtons = () => {
  return (
    <div className="text-center mb-2">
      {socialLogins.map((login) => (
        <button className="btn bg-[#208700] text-white border-black border-none" key={login.name} onClick={login.action}>
         {login.icon} Continue with {login.name}
        </button>
        
      ))}
    </div>
  );
};

export default SocialLoginButtons;


