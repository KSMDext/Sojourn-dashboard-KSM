import axios from "axios";

const axiosWithToken = () => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use((config) => {
    
    const token = localStorage.getItem("userAuthToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  return axiosInstance;
};

export default axiosWithToken;
