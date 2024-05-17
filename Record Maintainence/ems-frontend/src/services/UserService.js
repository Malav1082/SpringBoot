import axios from "axios";
import { toast } from "react-toastify";

const base_url = "http://localhost:8080";

export const postApi = async (url, data, succ, err) => {
  console.log("data", data);
  try {
    const response = await axios.post(base_url + url, data);
    console.log("success", response);
    toast.success(succ, {
      //   position: "top-center",
    });
    return response;
  } catch (error) {
    console.log("error", error);
    toast.error(err, {
      //   position: "top-center",
    });
    return error.response; // Ensure this returns the error response
  }
};

export const getApi = async (url, succ, err) => {
  try {
    const response = await axios.get(base_url + url);
    console.log("success", response);
    toast.success(succ, {
      //   position: "top-center",
    });
    return response;
  } catch (error) {
    console.log("error", error);
    toast.error(err, {
      //   position: "top-center",
    });
    return error.response; // Ensure this returns the error response
  }
};
