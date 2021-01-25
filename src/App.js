import React from "react"
import {BrowserRouter as Router, withRouter} from "react-router-dom"
import {Container} from "react-bootstrap"
import './App.css'

import Navigation from "./components/Navigation.jsx"
import Footer from "./components/Footer.jsx"
import Routes from "./Routes";

function App() {
  // sessionStorage.setItem('user', JSON.stringify({name: "admin", pass: "admin", image: "/avatar1.png"}))
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
