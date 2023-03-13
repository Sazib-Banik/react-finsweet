import React from "react";
import { NavLink } from "react-bootstrap";
import './FeaturePostBox.css';

const FeaturePostBox = ({item}) => {
  return (
    <div className="col-md-6 col-lg-12">
      <div className="post_box">
        <p className="sm_text">
          By <span>{item.name}</span> | {item.date}
        </p>
        {/* <h4>{item.heading}</h4> */}
        <NavLink to=''>{item.heading}</NavLink>
      </div>
    </div>
  );
};

export default FeaturePostBox;
