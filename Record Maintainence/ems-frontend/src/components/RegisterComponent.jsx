import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { postApi } from "../services/UserService";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "Register";
  }, []);

  const [user, setUser] = useState({});
  const [passwordConfirmed, setPasswordConfirmed] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordConfirmed) {
      try {
        await postApi(
          "/register",
          user,
          "Registered Successfully!",
          "Oops! Something went wrong."
        );
        // Redirect to login page after successful registration
        history.push("/login");
      } catch (error) {
        console.error("Registration Error:", error);
      }
    } else {
      alert("Password not matched!");
    }
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Register</h2>
      <Form onSubmit={handleRegister}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="mobileNumber">Mobile Number</Label>
          <Input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            onChange={handleInputChange}
            placeholder="Enter mobile number"
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Enter password"
          />
        </FormGroup>

        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) =>
              setPasswordConfirmed(user.password === e.target.value)
            }
            placeholder="Confirm your password"
            invalid={!passwordConfirmed}
          />
          {!passwordConfirmed && <small className="text-danger">Passwords do not match</small>}
        </FormGroup>

        <Button type="submit" color="primary">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
