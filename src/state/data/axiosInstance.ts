import axios from "axios";

const endpoint = "http://localhost:5000";
const userToken = localStorage.getItem("userToken");

// https://warm-meadow-66799.herokuapp.com

const axiosInstance = axios.create({
  baseURL: endpoint,
  timeout: 15000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.common["access_token"] = JSON.parse(userToken);
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default axiosInstance;

