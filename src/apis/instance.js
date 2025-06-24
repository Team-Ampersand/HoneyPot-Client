import axios from "axios";
import getToken from "./getToken";
import setToken from "./setToken";

const instance = axios.create({
  baseURL: process.env.REACT_APP_CLIENT_API,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

instance.interceptors.request.use(
  (config) => {
    const { accessToken } = getToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // if (error.response) {
    //   console.log("🍒 status:", error.response.status);
    // } else {
    //   console.log(
    //     "🍒 네트워크 에러 또는 서버 응답 없음:",
    //     error.message,
    //     error
    //   );
    // }
    // const originalRequest = error.config;
    // if (
    //   error.response &&
    //   error.response.status === 401 &&
    //   !originalRequest._retry
    // ) {
    //   if (isRefreshing) {
    //     return new Promise(function (resolve, reject) {
    //       failedQueue.push({ resolve, reject });
    //     })
    //       .then((token) => {
    //         originalRequest.headers["Authorization"] = `Bearer ${token}`;
    //         return instance(originalRequest);
    //       })
    //       .catch((err) => Promise.reject(err));
    //   }
    //   originalRequest._retry = true;
    //   isRefreshing = true;
    //   const { refreshToken } = getToken();
    //   try {
    //     const { data } = await axios.patch(
    //       "/auth",
    //       {},
    //       {
    //         baseURL: process.env.REACT_APP_CLIENT_API,
    //         withCredentials: true,
    //         headers: {
    //           RefreshToken: refreshToken ? `Bearer ${refreshToken}` : undefined,
    //         },
    //       }
    //     );
    //     setToken(data);
    //     processQueue(null, data.accessToken);
    //     originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
    //     return instance(originalRequest);
    //   } catch (err) {
    //     processQueue(err, null);
    //     localStorage.clear();
    //     window.location.href = "/signin";
    //     return Promise.reject(err);
    //   } finally {
    //     isRefreshing = false;
    //   }
    // }
    // return Promise.reject(error);
  }
);

export default instance;
