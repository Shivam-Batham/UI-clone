import axios from "axios";

const axiosInstance = axios.create({
  baseURL:" https://sumordemobe.onrender.com",
});


export default axiosInstance;