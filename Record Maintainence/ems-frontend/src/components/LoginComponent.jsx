import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { postApi } from "../services/UserService";
import { Link } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [user, setUser] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // const res = axios.post(`${base_url}/login`, user).then(
    //   (res) => {
    //     console.log("res", res.data);
    //     // toast.success("Welcome to the Employee Database Management System!");
    //     toast.success("success", {
    //       //   position: "top-center",
    //     });
    //   },
    //   (error) => {
    //     console.log(error);
    //     toast.error(, {
    //       //   position: "top-center",
    //     });
    //   }
    // );
    postApi("/login", user, "success", "Oops! Something went wrong.");
  };

  return (
    <div>
      <Container>
        <Form method="post" onSubmit={handleLogin}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}

            />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            {/* <FormText>Example help text that remains unchanged.</FormText> */}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
            />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            {/* <FormText>Example help text that remains unchanged.</FormText> */}
          </FormGroup>
          <Button type="submit" color="primary" outline>
            Login
          </Button>
          <Link className="btn btn-warning" to={"/register"}>
            Register
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
