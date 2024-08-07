import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const HomeNavbar = () => {
  return (
    <div >
    <Navbar expand="lg" className="bg-dark">
    <Container >
      <Navbar.Brand as ={Link} to="/">Trends</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto flex space-x-6">
          <Nav.Link as ={Link} to="/">Home</Nav.Link>
          
          <Nav.Link as ={Link} to="/add">Settings</Nav.Link>
          <Nav.Link as ={Link} to="/user/signup">User</Nav.Link>
         
          <Nav.Link as ={Link} to="/sellerdashboard">Become a Seller</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default HomeNavbar