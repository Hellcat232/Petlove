import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
if (!API_URL) {
  console.log("React app is not defined");
}

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
