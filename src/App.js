import React from "react"
import {BrowserRouter as Router, withRouter} from "react-router-dom"
import {Container} from "react-bootstrap"
import './App.css'

import Navigation from "./components/Navigation.jsx"
import Footer from "./components/Footer.jsx"
import Routes from "./Routes";
import {defUser} from "./functions";

function App() {

  // defUser()

  const NavWithRouter = withRouter(Navigation); // get page with location

  return (
    <Router>
      <NavWithRouter/>
      <Container>
        <Routes/>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
