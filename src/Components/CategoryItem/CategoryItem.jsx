import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="catagory_item">
        <div className="catagory_item_img d-flex align-items-center justify-content-center">
          <img src={item.img} alt="" />
        </div>
        <h3>{item.heading}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
