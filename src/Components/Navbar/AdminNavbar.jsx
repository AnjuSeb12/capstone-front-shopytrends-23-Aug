import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'

const AdminNavbar = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand as ={Link} to="/">Trends</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto space-x-5">
          
          <Nav.Link as ={Link} to="/admin/userview">User</Nav.Link>
          <Nav.Link as ={Link} to="/admin/sellerview">seller</Nav.Link>
          <Nav.Link as ={Link} to="/admin/selleritemview">sellerProduct</Nav.Link>

          
         
    
         
          
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>

    </div>
  )
}

export default AdminNavbar