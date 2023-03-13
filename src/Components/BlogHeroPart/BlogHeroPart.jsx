import React from 'react';
import './BlogHeroPart.css';

const BlogHeroPart = () => {
    return (
        <section id="blog_hero_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="blog_hero_content">
                <p className="blog_top">Featured Post</p>
                <h2>
                  Step-by-step guide to choosing <br />
                  great font pairs
                </h2>
                <p className="sm_text">By <span>James West</span> | May 23, 2022</p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident.
                </p>
                <button className="theme_btn">
                  Read More <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="blog_hero_img">
                <img src="https://i.ibb.co/pK7SRps/blog-hero-bg.png" alt="" className="w-100"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BlogHeroPart;