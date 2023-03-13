import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const signout = () => {
    signOut(auth);
  }
    return (
        <header id="header_part">
        <Navbar expand="lg" className="menu-part">
        <Container>
          <Navbar.Brand as={Link} to='/'>
          <img src="https://i.ibb.co/gzdKHP9/Logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About Us</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
            {
              user ? (<Button className='top-btn' onClick={signout}>Log-Out</Button>) : (<NavLink to="/login" className="nav-link top-btn">Log-In</NavLink>)             
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    );
};

export default Header;