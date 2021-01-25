import React from "react"
import {useForm} from "react-hook-form"
import {Form, Button} from "react-bootstrap"
import {setUser} from "../../functions";

const RegisterForm = () => {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    setUser({name: data.name, pass: data.password})
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 align="center">Register</h3>
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
      <Button type="submit" variant="dark" className="btn-block">Register</Button>
    </Form>
  )
}

export default RegisterForm;
