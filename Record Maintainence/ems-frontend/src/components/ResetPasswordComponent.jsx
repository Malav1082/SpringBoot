import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { postApi } from "../services/UserService";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "", new_password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState(true);
  const [successAlert, setSuccessAlert] = useState(false);

  useEffect(() => {
    document.title = "Reset Password";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordConfirmed(user.new_password === e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (user.new_password !== confirmPassword) {
      setPasswordConfirmed(false);
      return;
    }
    setPasswordConfirmed(true);
    try {
      await postApi("/reset-password", user, "Password reset successfully!", "Oops! Something went wrong.");
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Password Reset Error:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Reset Password</h2>
      {successAlert && <Alert color="success">Password reset successfully!</Alert>}
      <Form onSubmit={handleResetPassword}>
        <FormGroup>
          <Label for="name">UserName</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            placeholder="Enter your username"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Old Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Enter your old password"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="new_password">New Password</Label>
          <Input
            type="password"
            id="new_password"
            name="new_password"
            onChange={handleInputChange}
            placeholder="Enter your new password"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm New Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your new password"
            invalid={!passwordConfirmed}
            required
          />
          {!passwordConfirmed && <small className="text-danger">Passwords do not match</small>}
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button type="submit" color="primary">
            Reset Password
          </Button>
          <Button
            type="button"
            color="secondary"
            onClick={() => navigate("/login")}
          >
            Back
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ResetPassword;
