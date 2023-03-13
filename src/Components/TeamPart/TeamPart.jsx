import React from 'react';
import './TeamPart.css';

const TeamPart = () => {
    return (
        <section id="team_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="team_content">
                <h2>Our team of creatives</h2>
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
            <div className="col-lg-6">
              <div className="team_img">
                <img src="https://i.ibb.co/DwPLjz1/team.pngclassName" alt="" className="w-100"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default TeamPart;