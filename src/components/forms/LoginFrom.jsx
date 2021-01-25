import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Form, Button} from "react-bootstrap";
import {ErrorMessage} from "../ErrorMessage";
import {setUser} from "../../functions";

const LoginForm = ({findMatch}) => {

  const {register, handleSubmit} = useForm();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    const user = findMatch(data);
    if (user !== undefined) {
      setUser(user);
    } else {
      setLoginError("Wrong pass");
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 align="center">Login</h3>
      {/* NAME */}
      <Form.Group className="form-group">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          placeholder="Enter login name"
          ref={register}
          required
        />
      </Form.Group>
      {/* PASS */}
      <Form.Group className="form-group">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter login password"
          ref={register}
          required
        />
      </Form.Group>
      { loginError && <ErrorMessage text={loginError}/> }
      <Button type="submit" variant="dark" className="btn-block">Login</Button>
    </Form>
  )
}

export default LoginForm;
