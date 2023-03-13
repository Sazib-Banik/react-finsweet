import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FeaturePostBox from '../FeaturePostBox/FeaturePostBox';
import './FeaturePart.css';

const FeaturePart = () => {
    const [postBox, setPostBox] = useState([]);
    useEffect(()=>{
        fetch('FeturePostBox.json')
        .then(res => res.json())
        .then(data => setPostBox(data))
    },[]);
    return (
        <section id="feature_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="feature_part_left">
                <h2>Featured Post</h2>
                <div className="feature_post_box">
                  <img src="https://i.ibb.co/dW0M56m/feature.png" alt="" className="w-100" />
                  <p className="sm_text">By <span>John Doe</span> | May 23, 2022</p>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                  <button className="theme_btn">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="feature_part_right">
                <div className="row">
                  <div className="col-6">
                    <h2>All Posts</h2>
                  </div>
                  <div className="col-6">
                    <NavLink to='' className="btn view_btn">View All</NavLink>
                  </div>
                </div>
                <div className="row">
                    {postBox.map(item=><FeaturePostBox key={item.id} item={item} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FeaturePart;