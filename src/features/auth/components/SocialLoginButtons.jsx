import { FaGoogle } from "react-icons/fa";
import { loginWithGoogleService } from "../api/socialAuth";
import { useNavigate } from "react-router";
import { axiosPublic } from "@/lib/axiosPublic";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const socialLogins = [
  { name: "Google", login: loginWithGoogleService, icon: <FaGoogle /> },
];

const SocialLoginButtons = ({ from }) => {
  const navigate = useNavigate();
  const { saveAccessToken } = useAuth();

  const handleSocialLogin = async (login) => {
    try {
      // 1️⃣ Firebase social login (Google / GitHub)
      const result = await login();
      const user = result.user;

      if (!user) {
        throw new Error("Social login failed");
      }

      // 2️⃣ Get Firebase ID token (ONLY correct token)
      const idToken = await user.getIdToken(true);

      // 3️⃣ Backend login (JWT issue)
      const res = await axiosPublic.post(
        "/auth/login",
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        },
      );

      const accessToken = res.data?.accessToken;

      if (!accessToken) {
        throw new Error("Access token not received");
      }

      saveAccessToken(accessToken);

      // 4️⃣ Success feedback
      Swal.fire({
        title: "Login successful",
        text: "You have logged in successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      // 5️⃣ Navigate only after everything succeeds
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Social login failed:", error);

      let message = "Social login failed. Please try again.";

      if (error.code === "auth/internal-error") {
        message =
          "Unable to connect to Google services. Please check your internet connection or disable VPN / ad blockers.";
      } else if (error.code === "auth/popup-closed-by-user") {
        message = "Login popup was closed before completing sign in.";
      } else if (error.code === "auth/cancelled-popup-request") {
        message = "Another login attempt is already in progress.";
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        message =
          "An account already exists with this email. Please log in using a different method.";
      } else if (error.code === "auth/network-request-failed") {
        message = "Network error. Please check your internet connection.";
      }

      Swal.fire({
        title: "Login failed",
        text: message,
        icon: "error",
      });
    }
  };

  return (
    <div className="text-center mb-2 w-4/5 mx-auto">
      {socialLogins.map((provider) => (
        <button
          key={provider.name}
          onClick={() => handleSocialLogin(provider.login)}
          className="btn bg-[#208700] text-white border-none flex items-center justify-center gap-2 w-full"
        >
          {provider.icon}
          Continue with {provider.name}
        </button>
      ))}
    </div>
  );
};

export default SocialLoginButtons;
