import React from 'react'
import { Container, Nav, Navbar,Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../redux/userAuthentication'
import Cookies from 'js-cookie';
import { FiShoppingCart } from "react-icons/fi";




const HomeNavbar = () => {

 
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(isAuthenticated)

  
  const handleLogout= (e) => {
    e.preventDefault();
    dispatch(userLogout());
    console.log("Token before removal:", Cookies.get("token"));
    Cookies.remove("token");
    console.log("Token after removal:", Cookies.get("token"));
    
    navigate("user/signup");
  }
  
  return (
    <div >
    <Navbar expand="lg" className="bg-dark">
    <Container >
      <Navbar.Brand as ={Link} to="/">Trends</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto flex space-x-6">
          <Nav.Link as ={Link} to="/">Home</Nav.Link>
          
          
          {/* <Nav.Link as ={Link} to="/user/signup">User</Nav.Link> */}
         
          <Nav.Link as ={Link} to="/sellerdashboard">Become a Seller</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
        <Nav.Link as ={Link} to="/user/cart"><FiShoppingCart /></Nav.Link>
          {isAuthenticated ? <Button onClick={handleLogout}>Logout</Button> : <Nav.Link as ={Link} to="/user/signin"><Button>Signup</Button></Nav.Link> }
       
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default HomeNavbar