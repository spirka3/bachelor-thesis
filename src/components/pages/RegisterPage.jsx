import React from "react";
import {Redirect} from "react-router";
import {getUser} from "../../functions";
import RegisterForm from "../forms/RegisterFrom";

const Register = () => {

  return (
    <>
      {getUser() === undefined
        ? <RegisterForm/>
        : <Redirect to="/"/>
      }
    </>
  )
};

export default Register
