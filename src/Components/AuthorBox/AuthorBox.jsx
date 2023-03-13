import React from 'react';
import { Link } from 'react-router-dom';
import './AuthorBox.css';

const AuthorBox = ({item}) => {
    return (
        <div className="col-md-6 col-lg-3">
              <div className="author_box text-center">
                <div className="authors_img">
                  <img src={item.img} alt="" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.desig}</p>
                <div className="footer_social_icon authors_link">
                  <Link to=''><i className="fa-brands fa-facebook-f"></i></Link>
                  <Link to=''><i className="fa-brands fa-twitter"></i></Link>
                  <Link to=''><i className="fa-brands fa-instagram"></i></Link>
                  <Link to=''><i className="fa-brands fa-linkedin-in"></i></Link>
                </div>
              </div>
            </div>
    );
};

export default AuthorBox;