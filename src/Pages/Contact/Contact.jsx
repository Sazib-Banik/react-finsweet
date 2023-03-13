import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="contact_content">
                <p className="top_head">Contact us</p>
                <h1>Let’s Start a Conversation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="row contact_us_details">
                <div className="col-md-6 col-lg-6">
                  <div className="working_hours_part">
                    <span className="contact_details_heading">Working hours</span>
                    <h5>Monday To Friday</h5>
                    <h5>9:00 AM to 8:00 PM </h5>
                    <p>Our Support Team is available 24/7</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="contact_us_part working_hours_part">
                    <span className="contact_details_heading">Contact Us</span>
                    <h5>020 7993 2905</h5>
                    <p>hello@finsweet.com</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <div className="row contact_form">
            <div className="col-lg-8 offset-lg-2">
             
                <div className="mb-3">
                  <input type="text" className="form-control" id="" placeholder="Full Name"/>
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="" placeholder="Your Email"/>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="" rows="3" placeholder="Message"></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn theme_btn" type="button">Button</button>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;