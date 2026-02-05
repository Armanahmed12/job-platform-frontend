import { axiosPublic } from "@/lib/axiosPublic";
import { setAxiosAccessToken } from "@/lib/axiosSecure";

let refreshingPromise = null;

export const ensureAccessToken = async () => {
  if (!refreshingPromise) {
    refreshingPromise = axiosPublic
      .post("auth/refresh-token")
      .then((res) => {
        setAxiosAccessToken(res.data.accessToken);
        return res.data.accessToken;
      })
      .finally(() => {
        refreshingPromise = null;
      });
  }

  return refreshingPromise;
};
