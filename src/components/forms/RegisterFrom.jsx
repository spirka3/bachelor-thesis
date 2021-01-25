import React, {useState} from "react"
import {Redirect} from "react-router";
import {useForm} from "react-hook-form"
import {Form, Button} from "react-bootstrap"

const RegisterForm = () => {

  const {register, handleSubmit} = useForm()
  const [user, setUser] = useState()

  const onSubmit = (data) => {
    const user = {name: data.name, pass: data.password}
    setUser(user)
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <>
      {user !== undefined ? (
        <Redirect to="/"/>
      ) : (
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
      )}
    </>
  )
}

export default RegisterForm;
