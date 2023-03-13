import React from 'react';
import { NavLink } from 'react-bootstrap';
import './HeroPart.css';

const HeroPart = () => {
    return (
        <section id="hero_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero_content">
                <p className="hero_top">Posted on <span>startup</span></p>
                <h2>
                  Step-by-step guide to choosing <br />
                  great font pairs
                </h2>
                <p className="sm_text">By <span>James West</span> | May 23, 2022</p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu <br />
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident.
                </p>
                <NavLink to='' className="theme_btn">
                  Read More <i className="fa-solid fa-angle-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroPart;