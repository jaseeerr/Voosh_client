import axios from "axios";
import { BASE_URL } from "../config/URLS";

const MyAxiosInstance = () => {


    console.log("tokeeeeeeeen")
   let token = JSON.parse(localStorage.getItem('token'))
   console.log(token)
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    
  });

  return instance;
};

export default MyAxiosInstance;
