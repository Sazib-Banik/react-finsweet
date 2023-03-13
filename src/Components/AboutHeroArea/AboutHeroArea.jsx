import React from 'react';
import './AboutHeroArea.css';

const AboutHeroArea = () => {
    return (
        <section className="about_hero_area">
        <div className="container">
          <div className="about_hero_wrapper">
            <div className="row">
              <div className="col-lg-6 offset-lg-1">
                <div className="about_hero_content">
                  <h3>ABOUT US</h3>
                  <h1>
                    We are a team of content writers who share their learnings
                  </h1>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_hero_details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutHeroArea;