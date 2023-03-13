import React from 'react';
import './JoinTeam.css';

const JoinTeam = () => {
    return (
        <section id="join_team">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8 col-lg-6 offset-lg-3 text-center">
              <div className="heading">
                <h2>
                  Join our team to be a part <br />
                  of our story
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <button className="theme_btn">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default JoinTeam;