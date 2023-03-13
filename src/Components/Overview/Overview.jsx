import React from 'react';
import './Overview.css';

const Overview = () => {
    return (
        <section id="overview">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="overview_img">
                <div className="counter_box">
                  <h3 id="num1">12+</h3>
                  <p>Blogs Published</p>
                </div>
                <div className="counter_box">
                  <h3 id="num2">18K+</h3>
                  <p>Views on Finsweet</p>
                </div>
                <div className="counter_box">
                  <h3 id="num3">30K+</h3>
                  <p>Total active Users</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-0 color_row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 purpal py-2"></div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-7 yellow py-2"></div>
          </div>
        </div>
      </section>
    );
};

export default Overview;