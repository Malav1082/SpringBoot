import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home";
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    axios.get("/home")
      .then((res) => {
        console.log("Response data:", res.data);
        console.log("Success: Employees fetched successfully");
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  };

  const handleLogout = () => {
    // Perform any necessary logout logic here (e.g., clearing tokens, etc.)
    navigate("/login");
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Employee Database Management System!</p>
      {/* <Button onClick={() => navigate(-1)}>Back</Button> Navigate back */}
      <Button color="danger" onClick={handleLogout}>Logout</Button> {/* Logout button */}
    </div>
  );
};

export default Home;
