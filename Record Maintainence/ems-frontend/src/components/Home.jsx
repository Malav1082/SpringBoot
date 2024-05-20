import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import EmployeeTable from './EmployeeTable';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Employee Database Management System!</p>
      <Button color="danger" onClick={handleLogout}>Logout</Button>

      <EmployeeTable />
    </div>
  );
};

export default Home;
