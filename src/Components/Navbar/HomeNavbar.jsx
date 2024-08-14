import React from 'react'
import { FormControl, Form, Container, Nav, Navbar, Button, InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../redux/userAuthentication'
import Cookies from 'js-cookie';
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import ThemeToggle from '../theme/ThemeToggle'

import SearchBar from '../User/SearchBar'
import { setSearchQuery } from '../../redux/searchSile'






const HomeNavbar = () => {




  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const cartItems = useSelector((state) => state.cart.items);


  const handleSearch = (query) => {

    dispatch(setSearchQuery(query));
    navigate(`/search?query=${query}`);
  };



  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(userLogout());

    Cookies.remove("token");


    navigate("user/signup");
  }

  return (
    <div >
      <Navbar expand="lg" className="bg-dark  navbar-dark">
        <Container >
          <Navbar.Brand as={Link} to="/">Trends</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>


              {/* <Nav.Link as ={Link} to="/user/signup">User</Nav.Link> */}

              <Nav.Link as={Link} to="/sellerdashboard">Become a Seller</Nav.Link>
            </Nav>
            <SearchBar onSearch={handleSearch} />

            <Nav className="ml-auto align-items-center">
              <Nav.Link as={Link} to="/user/cart" className="position-relative"><FiShoppingCart size={24} className="text-white" />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Nav.Link>
              {isAuthenticated ? <Button variant="outline-light" onClick={handleLogout}>Logout</Button> : <Nav.Link as={Link} to="/user/signin"><Button variant="outline-light">Signup</Button></Nav.Link>}

              <ThemeToggle className="ml-3" />
            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default HomeNavbar