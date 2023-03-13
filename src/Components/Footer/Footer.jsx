import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer_area">
      <div className="container">
        <div className="row nav">
          <div className="col-12 col-sm-12 col-md-3 col-lg-4">
          <Navbar.Brand href="#home">
          <img src="https://i.ibb.co/gzdKHP9/Logo.png" alt="logo" />
          </Navbar.Brand>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-8">
            <ul className="footer_menu">
              <li className="nav-item">
                <NavLink to='/' className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/blog' className="nav-link">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/privacy' className="nav-link">Privacy Policy</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer_newsletter">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="newsletter_content">
                <h2>
                  Subscribe to our news letter to get latest updates and news
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center">
              <div className="newsletter_form">
                <input type="text" placeholder="Enter Your Email..." />
                <button className="theme_btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="row">
            <div className="col-12 col-sm-7 col-md-6 col-lg-6">
              <span>Finstreet 118 2561 Fintown</span>
              <span>Hello@finsweet.com 020 7993 2905</span>
            </div>
            <div className="col-12 col-sm-5 col-md-6 col-lg-6">
              <div className="footer_social_icon">
                <NavLink to=''><i className="fa-brands fa-facebook-f"></i></NavLink>
                <NavLink to=''><i className="fa-brands fa-twitter"></i></NavLink>
                <NavLink to=''><i className="fa-brands fa-instagram"></i></NavLink>
                <NavLink to=''><i className="fa-brands fa-linkedin-in"></i></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;