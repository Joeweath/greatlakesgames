import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button, Form, FormControl, Container, NavDropdown } from 'react-bootstrap';

const NavBar = ({ user, handleLogout }) => {

  return (
    <>
      {user ?
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
            <img 
            src="/assets/mystery_block.png" 
            width="30" 
            height="30"
            className="d-inline-block align-top" 
            alt="a question block icon from mario">
            </img>
                Welcome, {user.name}
                </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Games</Nav.Link>
                <Nav.Link href="/profiles">Profiles</Nav.Link>
                <Nav.Link href="/changePassword">Change Password</Nav.Link>
                <Nav.Link
                href=""
                onClick={handleLogout}
                >LOG OUT</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        :
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">Games</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />

        </>

      }
    </>
  );
}

export default NavBar; 