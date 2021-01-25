import React from "react";
import {Redirect} from "react-router";
import {removeUser} from "../../functions";

const LogoutPage = () => {

  removeUser()

  return (
    <Redirect to="/"/>
  )
};

export default LogoutPage;
