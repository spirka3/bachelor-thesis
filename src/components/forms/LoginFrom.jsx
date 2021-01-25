import React from "react";
import {useForm} from "react-hook-form";
import {Form, Button} from "react-bootstrap";
import {ErrorMessage} from "../ErrorMessage";

const LoginForm = ({setUser, onSubmit, loginError}) => {

  const {register, handleSubmit} = useForm();

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
