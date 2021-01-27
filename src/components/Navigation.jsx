import React from 'react'
import {Navbar, Nav, NavLink, NavDropdown} from 'react-bootstrap'
import {UserIcon} from './others/UserIcon'
import {SearchBar} from './SearchBar'
import {nav_routes} from '../data'
import Image from "react-bootstrap/Image";

const Navigation = ({location}) => {

  const DropDown = ({nav}) => {
    return (
      <NavDropdown title={nav.name} id="basic-nav-dropdown">
        {nav.drop.map(createDropDownLink)}
      </NavDropdown>
    )
  }

  const createLink = (n) => {
    return (
      <> {Object.keys(n).includes("drop")
          ? <DropDown nav={n}/>
          : <NavLink href={n.link}>{n.name}</NavLink>}
      </>
    )
  }

  const createDropDownLink = ({link, name}) => {
    return (
      <NavDropdown.Item href={link}>{name}</NavDropdown.Item>
    )
  }

  const NavBrand = () => {
    return (
      <Navbar.Brand href="/">
        <Image alt="logo" src="/avatar2.png" width="40" height="40"/>
      </Navbar.Brand>
    )
  }

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <NavBrand/>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav className="ml-auto" navbar activeKey={location.pathname}>
          {nav_routes.map(createLink)}
          <SearchBar/>
          <UserIcon/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
