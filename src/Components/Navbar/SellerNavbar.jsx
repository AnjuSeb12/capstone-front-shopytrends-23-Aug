import React, { useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { authSellerSuccess, sellerLogout } from '../../redux/sellerAuthentication'







const SellerNavbar = () => {
  const isAuthenticated = useSelector((state) => state.sellerAuth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {

    const token = Cookies.get('token');
    if (token) {
      dispatch(authSellerSuccess(token));
    }
  }, [dispatch]);



  const handleLogout = () => {

    dispatch(sellerLogout());
    Cookies.remove("token");
    navigate("seller/signup");
  }



  return (
    <div>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >Trends</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">


            <Nav className="me-auto space-x-5">




            </Nav>
            <Nav className="ml-auto space-x-5" >
              {/* <Nav.Link as ={Link} to="/seller/signup">Login</Nav.Link> */}
              <Nav.Link as={Link} to="/seller/productsadd">Start Selling</Nav.Link>
              <Nav.Link as={Link} to="/seller/productsview">Products View</Nav.Link>

            </Nav>
            <Nav className="ms-auto">
              {isAuthenticated ? <Button variant="outline-light" onClick={handleLogout}>Logout</Button> : <Nav.Link as={Link} to="/seller/signup"><Button variant="outline-light">Login</Button></Nav.Link>}

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default SellerNavbar