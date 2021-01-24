import React from "react"
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom"
import {Container} from "react-bootstrap"
import './App.css'
import {pages} from './data.js'

import Page from './Page.jsx'
import LoginPage from "./components/LoginPage.jsx"
import LogoutPage from "./components/LogoutPage.jsx"
import Navigation from "./components/Navigation.jsx"
import Cards from "./components/Cards.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  const NavWithRouter = withRouter(Navigation); // get page with location

  const createRoute = ({path, id}) => {
    return ( 
      <Route path={path}>
        <Page id={id}/>
      </Route>
    )
  } 

  return (
    <Router>
      <>
        <NavWithRouter/>
        <Container>
          <Switch>
            {/* basics routes */}
            <Route path='/' exact component={Cards} />
            <Route path='/login' exact component={LoginPage} />
            <Route path='/logout' exact component={LogoutPage} />
            {/* custom routes */}
            {pages.map(createRoute)}
          </Switch>
        </Container>
        <Footer/>
      </>
    </Router>
  )
}

export default App
