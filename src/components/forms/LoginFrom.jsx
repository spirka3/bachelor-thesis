import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Form, Button} from "react-bootstrap";
import {ErrorMessage} from "../others/ErrorMessage";
import {setUser} from "../../functions";
import TextGroupForm from "./TextGroupForm";

const LoginForm = ({findMatch}) => {

  const {register, handleSubmit} = useForm();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    const user = findMatch(data);
    if (user !== undefined) {
      setUser(user);
    } else {
      setLoginError("Wrong name or password");
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 align="center">Login</h3>
      {/* NAME */}
      <TextGroupForm
        label="name"
        name="name"
        register={register}
      />
      {/* PASS */}
      <TextGroupForm
        label="password"
        name="password"
        type="password"
        register={register}
        required={true}
      />
      {loginError && <ErrorMessage text={loginError}/>}
      <Button type="submit" variant="dark" className="btn-block">Login</Button>
    </Form>
  )
}

export default LoginForm;
