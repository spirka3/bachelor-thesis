import React from 'react'
import {Navbar, Nav, NavLink} from 'react-bootstrap'
import {UserIcon} from './UserIcon'
import {SearchBar} from './SearchBar'

const Navigation = ({location}) => {

  const user = sessionStorage.getItem('user')

  const NavLinks = () => {
    return (
      <>
        { user !== null && 
          <NavLink href='/admin'>Administration</NavLink>
        }
        <UserIcon/>
      </>
    )
  }

  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="https://picsum.photos/200"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="ml-auto" navbar activeKey={location.pathname}>
          <SearchBar/>
          <NavLinks/>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation
