import axios from "axios";

const endpoint = "https://api-stage.mkononi.biz";
const userToken = localStorage.getItem("userToken")?.replace(/^"(.+(?="$))"$/, '$1');

const headers = {
  Authorization: userToken,
};

const axiosInstance = axios.create({
  baseURL: endpoint,
  timeout: 15000,
  // headers: headers,
});

axiosInstance.interceptors.request.use(
  (config) => {    
    config.headers.common["Authorization"] = userToken;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default axiosInstance;
