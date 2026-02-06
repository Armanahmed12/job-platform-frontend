import axiosSecure, { setAxiosAccessToken } from "@/lib/axiosSecure";

let refreshingPromise = null;

export const ensureAccessToken = async () => {
  if (!refreshingPromise) {
    refreshingPromise = axiosSecure
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
