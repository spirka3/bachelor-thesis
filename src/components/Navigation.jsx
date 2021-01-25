import React from 'react'
import {Navbar, Nav, NavLink, NavDropdown} from 'react-bootstrap'
import {UserIcon} from './UserIcon'
import {SearchBar} from './SearchBar'
import {nav_routes} from '../data'

const Navigation = ({location}) => {

  const createLink = (n) => {
    return (
      <>
        {Object.keys(n).includes("drop")
          ? <DropDown/>
          : <NavLink href={n.link}>{n.name}</NavLink>
        }
      </>
    )
  }

  const createDropDownLink = ({link, name}) => {
    return (
      <NavDropdown.Item href={link}>{name}</NavDropdown.Item>
    )
  }

  const DropDown = ({nav}) => {
    return (
      <NavDropdown title={nav.name} id="basic-nav-dropdown">
        {nav.drop.map(createDropDownLink)}
      </NavDropdown>
    )
  }

  const NavBrand = () => {
    return (
      <Navbar.Brand href="/">
        <img
          alt="logo"
          src="https://picsum.photos/200"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
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
