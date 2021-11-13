import axios from "axios";

const endpoint = "https://warm-meadow-66799.herokuapp.com";
// const endpoint = "http://localhost:5000";


const axiosInstance:any = axios.create({
  baseURL: endpoint,
  timeout: 50000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      config.headers.common["access_token"] = JSON.parse(userToken);
    }

    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default axiosInstance;
