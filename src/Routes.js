import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import './App.css'
import CustomPage from './components/pages/CustomPage.jsx'

import LoginPage from "./components/pages/LoginPage.jsx"
import LogoutPage from "./components/pages/LogoutPage.jsx"
import AdminPage from "./components/pages/AdminPage";
import RegisterForm from "./components/forms/RegisterFrom";
import ProfileForm from "./components/pages/ProfilePage";

import {pages} from './data.js'
import {getUser} from "./functions";
import ExampleLayout from "./components/ExampleLayout";
import RegisterPage from "./components/pages/RegisterPage";

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

  // const LogoutRoute = ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={props => (getUser() === null
  //       && <Component {...props} />
  //     )}
  //   />
  // )

  const createRoute = ({path, id}) => {
    return (
      <Route exact path={path}>
        <CustomPage id={id}/>
      </Route>
    )
  } 

  return (
    <Switch>
      {/* basics routes */}
      <Route path='/' exact component={ExampleLayout} />
      <Route exact path='/register' component={RegisterPage} />
      <Route exact path='/login' component={LoginPage} />
      <PrivateRoute exact path='/logout' component={LogoutPage} />
      <PrivateRoute exact path='/profile-settings' component={ProfileForm} />
      <PrivateRoute exact path='/admin' component={AdminPage} />
      {/* custom routes */}
      {pages.map(createRoute)}
    </Switch>
  )
}

export default Routes
