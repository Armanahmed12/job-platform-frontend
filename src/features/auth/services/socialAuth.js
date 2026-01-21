import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.init";

export const loginWithGoogleService = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
