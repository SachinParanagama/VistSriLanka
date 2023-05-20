import React, { useState, useEffect } from 'react';
import '../admin/HomeNavBar.css';
import '../admin/Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineDingding } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// import { logout } from "../actions/userAction";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";


function HomeNavBar() {

  return(
    <div className='nav-container'>
    <Navbar>
  

    <div id='hdLogo'> 
            <img alt="Logo"  src={require("../../images/logo.png")} width="100"  height="70" className="d-inline-block align-top" /> 
        </div>
        
      <Navbar.Brand>
      <Link to='/admin-home' className='homenavbar-logo'>
              Visit SriLanka
      </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
      <Nav className="m-auto">
        <Form inline>
          
        </Form>
      </Nav>

          <Nav>
            {" "}
            <Nav.Link>
            <Link to='/' className='homenav-links'>
                     Home
                  </Link>
            </Nav.Link>

            <Nav.Link>
            <Link to='/contact' className='homenav-links'>
                     Contact Us
                  </Link>
            </Nav.Link>

            
          </Nav>
          
        
         
        
      </Navbar.Collapse>
    
  </Navbar>
  </div>
);
}


export default HomeNavBar;