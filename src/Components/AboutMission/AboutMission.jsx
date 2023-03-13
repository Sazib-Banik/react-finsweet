import React from 'react';
import './AboutMission.css';

const AboutMission = () => {
    return (
        <section id="about_mission">
        <div className="container">
          <div className="row mx-0 color-box">
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 white py-2"></div>
            <div className="col-7 col-sm-7 col-md-7 col-lg-7 yellow py-2"></div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 purpal py-2"></div>
          </div>
          <div className="about_mission_content">
            <div className="row">
              <div className="col-lg-6">
                <div className="about_part">
                  <p className="about_text">about us</p>
                  <h2>
                    We are a community of content writers who share their
                    learnings
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="theme_btn">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission_part">
                  <p className="missionclassName_text">our mission</p>
                  <h2>
                    Creating valuable content for creatives all around the world
                  </h2>
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

export default AboutMission;