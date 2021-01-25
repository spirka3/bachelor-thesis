import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getUser} from "./functions";

const PrivateRoute = ({ component: Component, ...rest }) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /login page
  <Route {...rest} render={props => (getUser() !== null
    ? <Component {...props} />
    : <Redirect to="/login" />
    )}
  />
)

export default PrivateRoute;