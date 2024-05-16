import axios from "axios";
import { toast } from "react-toastify";

const base_url = "http://localhost:8080";

export const postApi = (url, data, succ, err) => {
  console.log("data", data);
  axios.post(base_url + url, data).then(
    (res) => {
      console.log("success", res);
      // toast.success("Welcome to the Employee Database Management System!");
      toast.success(succ, {
        //   position: "top-center",
      });
    },
    (error) => {
      console.log("error", error);
      toast.error(err, {
        //   position: "top-center",
      });
    }
  );
};

export const getApi = (url, succ, err) => {
  axios.get(base_url + url).then(
    (res) => {
      console.log("success", res);
      // toast.success("Welcome to the Employee Database Management System!");
      toast.success(succ, {
        //   position: "top-center",
      });
    },
    (error) => {
      console.log("error", error);
      toast.error(err, {
        //   position: "top-center",
      });
    }
  );
};
