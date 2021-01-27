import React, {useState} from "react"
import {useForm} from "react-hook-form"
import {Form, Button} from "react-bootstrap"
import {setUser} from "../../functions";
import TextGroupForm from "./TextGroupForm";
import {ErrorMessage} from "../others/ErrorMessage";
import {users} from "../../data";

const RegisterForm = () => {

  const {register, handleSubmit} = useForm()
  const [registerError, setRegisterError] = useState("");

  const onSubmit = (data) => {
    const user = users.find(u => u.name === data.name);
    if (user !== undefined) {
      setRegisterError("Name already exists");
    }
    else if (data.password !== data.confirm_password){
      setRegisterError("Passwords doesn't match");
    }
    else {
      setUser(user);
    }
    // TODO saveIntoDB
    setUser({name: data.name, pass: data.password})
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 align="center">Register</h3>
      {/* NAME */}
      <TextGroupForm
        label="name"
        name="name"
        register={register}
        required
      />
      {/* PASS */}
      <TextGroupForm
        label="password"
        name="password"
        register={register}
        required
      />
      {/* CONFIRM-PASS */}
      <TextGroupForm
        label="password"
        name="confirm_password"
        register={register}
        required
      />
      {registerError && <ErrorMessage text={registerError}/>}
      <Button type="submit" variant="dark" className="btn-block">Register</Button>
    </Form>
  )
}

export default RegisterForm;
