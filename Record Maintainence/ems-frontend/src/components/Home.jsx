import React, { useEffect } from "react";
const Home = () => {
  //   useEffect(() => {
  //     document.title = "Home";
  //   }, []);
  const getAllEmployees = () => {
    // axios.get(`${base_url}/home`).then(
    //   (res) => {
    //     console.log("res", res.data);
    //     // toast.success("Welcome to the Employee Database Management System!");
    //     toast.success("success", {
    //       //   position: "top-center",
    //     });
    //   },
    //   (error) => {
    //     console.log(error);
    //     toast.error("Oops! Something went wrong.", {
    //       //   position: "top-center",
    //     });
    //   }
    // );
  };
  useEffect(() => {
    document.title = "Home";

    getAllEmployees();
  }, []);
  return <div>Home</div>;
};

export default Home;
