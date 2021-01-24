import React, {useState} from "react";
import {Redirect} from "react-router";
import {users} from "../data";
import LoginForm from "./forms/LoginFrom.jsx";

const LoginPage = () => {

  const [user, setUser] = useState();
  const [loginError, setLoginError] = useState("");

  const sessionUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  const onSubmit = (data) => {
    const user = findMatch(data);
    if (user !== undefined) {
      setUser(user);
      sessionUser(user);
      console.log("success")
      console.log(user)
    } else {
      setLoginError("Wrong pass");
      console.log("fail")
    }
  }

  const findMatch = (data) => {
    // TODO MATO find employee with name and pass in db
    // TODO send feedback what is wrong: login or pass
    return users.find((u) =>
      u.name === data.name && u.pass === data.password
    );
  }

  console.log(user);

  return (
    <>
      {user !== undefined ? (
        <Redirect to="/"/>
      ) : (
        <LoginForm 
          setUser={setUser} 
          onSubmit={onSubmit} 
          loginError={loginError}/>
      )}
    </>
  )
};

export default LoginPage
