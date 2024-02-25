import axios from "axios";
import { Person } from "./validations";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Your Node.js server URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const getData = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/tables");
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const postData = async (data: Person) => {
  try {
    const response = await axiosInstance.post("/api/v1/tables", data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return null;
  }
};
