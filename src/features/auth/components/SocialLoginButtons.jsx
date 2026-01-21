import { FaGoogle } from "react-icons/fa";
import { loginWithGoogleService } from "../services/socialAuth";
import { useNavigate } from "react-router";
const socialLogins = [
  { name: "Google", login: loginWithGoogleService, icon: <FaGoogle /> },
];

const SocialLoginButtons = ({ from }) => {
  const navigate = useNavigate();

  const handleSocialLogin = (login) => {
    login()
      .then(() => navigate(from, { replace: true }))
      .catch(console.error);
  };

  return (
    <div className="text-center mb-2">
      {socialLogins.map((provider) => (
        <button
          key={provider.name}
          onClick={() => handleSocialLogin(provider.login)}
          className="btn bg-[#208700] text-white border-none"
        >
          {provider.icon} Continue with {provider.name}
        </button>
      ))}
    </div>
  );
};

export default SocialLoginButtons;

