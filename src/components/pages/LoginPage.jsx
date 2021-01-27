import React from "react";
import {Redirect} from "react-router";
import {users} from "../../data";
import LoginForm from "../forms/LoginFrom.jsx";
import {getUser} from "../../functions";

const LoginPage = () => {

  const findMatch = (data) => {
    // TODO findInDB
    return users.find((u) =>
      u.name === data.name && u.pass === data.password
    )
  }

  return (
    <>
      {getUser() === null
        ? <LoginForm findMatch={findMatch}/>
        // FIXME don't redirect right after click on login btn
        : <Redirect to="/"/>
      }
    </>
  )
}

export default LoginPage
