import React from 'react';
import './AllPostsItem.css';

const AllPostsItem = ({item}) => {
    return (
        <div className="col-12">
              <div className="post_item row">
                <div className="col-sm-4 col-md-5 col-lg-5">
                  <div className="post_item_img">
                    <img src={item.img} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-sm-8 col-md-7 col-lg-7 d-flex align-items-center">
                  <div className="post_content">
                    <h6>{item.subheading}</h6>
                    <h2>{item.heading}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default AllPostsItem;