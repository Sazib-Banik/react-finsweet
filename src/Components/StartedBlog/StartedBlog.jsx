import React from 'react';
import './StartedBlog.css';

const StartedBlog = () => {
    return (
        <section id="started_blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="started_blog_img">
                <img src="https://i.ibb.co/mGYSTF2/started-blog.pngclassName" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="started_blog_content">
                <h2>Why we started this Blog</h2>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default StartedBlog;