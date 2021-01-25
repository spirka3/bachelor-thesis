import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import './App.css'
import Page from './components/pages/Page.jsx'

import LoginPage from "./components/pages/LoginPage.jsx"
import LogoutPage from "./components/pages/LogoutPage.jsx"
import AdminPage from "./components/pages/AdminPage";
import RegisterForm from "./components/forms/RegisterFrom";
import ProfileForm from "./components/pages/ProfilePage";

import {pages} from './data.js'
import {getUser} from "./functions";
import ExampleLayout from "./ExampleLayout";

function Routes() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route {...rest} render={props => (getUser() !== null
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
    />
  )

  const createRoute = ({path, id}) => {
    return ( 
      <Route path={path}>
        <Page id={id}/>
      </Route>
    )
  } 

  return (
    <Switch>
      {/* basics routes */}
      <Route path='/' exact component={ExampleLayout} />
      <Route path='/register' exact component={RegisterForm} />
      <Route path='/login' exact component={LoginPage} />
      <PrivateRoute path='/logout' exact component={LogoutPage} />
      <PrivateRoute path='/profile-settings' exact component={ProfileForm} />
      <PrivateRoute path='/admin' exact component={AdminPage} />
      {/* custom routes */}
      {pages.map(createRoute)}
    </Switch>
  )
}

export default Routes
