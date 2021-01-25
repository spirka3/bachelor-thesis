import React from 'react'
import {Navbar, Nav, NavLink, NavDropdown} from 'react-bootstrap'
import {UserIcon} from './UserIcon'
import {SearchBar} from './SearchBar'
import {nav_routes} from '../data'

const Navigation = ({location}) => {

  sessionStorage.setItem('user', JSON.stringify({name: "admin", pass: "admin", image: "/avatar1.png"}))
  const user = sessionStorage.getItem('user')

  const DropDown = ({nav}) => {
    return (
      <NavDropdown title={nav.name} id="basic-nav-dropdown">
        {nav.drop.map(n =>
          <NavDropdown.Item href={n.link}>{n.name}</NavDropdown.Item>
        )}
      </NavDropdown>
    )
  }

  const NavLinks = () => {
    return (
      <>
        {nav_routes.map(n =>
          <>
            {Object.keys(n).includes("drop") ? (
              <DropDown nav={n}/>
            ) : (
              <NavLink href={n.link}>{n.name}</NavLink>
            )}
          </>
        )}
      </>
    )
  }

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="https://picsum.photos/200"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar activeKey={location.pathname}>
            <NavLinks/>
            <SearchBar/>
            <UserIcon/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation
