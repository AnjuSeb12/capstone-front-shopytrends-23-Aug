import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'


const SellerNavbar = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand as ={Link} to="/">Trends</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       
       
        <Nav className="me-auto space-x-5">
          <Nav.Link as ={Link} to="/seller/login">Sell Online</Nav.Link>
          
          
          
        </Nav>
        <Nav className="ml-auto space-x-5" >
        <Nav.Link as ={Link} to="/seller/signup">Login</Nav.Link>
        <Nav.Link as ={Link} to="/seller/productsadd">Start Selling</Nav.Link>
        <Nav.Link as ={Link} to="/seller/productsview">Products View</Nav.Link>
         
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>

    </div>
  )
}

export default SellerNavbar