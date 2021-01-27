import React from "react";
import {Redirect} from "react-router";
import {getUser} from "../../functions";
import RegisterForm from "../forms/RegisterFrom";

const RegisterPage = () => {

  return (
    <>
      {getUser() === null
        ? <RegisterForm/>
        // FIXME don't redirect right after click on login btn
        : <Redirect to="/"/>
      }
    </>
  )
};

export default RegisterPage
