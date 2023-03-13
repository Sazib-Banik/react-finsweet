import React, { useEffect, useState } from 'react';
import AllPostsItem from '../AllPostsItem/AllPostsItem';
import './AllPosts.css';

const AllPosts = () => {
    const [allPost, setAllPost] = useState([]);
    useEffect(()=> {
        fetch('AllPosts.json')
        .then(res=> res.json())
        .then(data=> setAllPost(data))
    },[])
    return (
        <section id="all_post">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="post_heading">
                <h2>All Post</h2>
              </div>
            </div>
            {allPost.map(item=><AllPostsItem key={item.id} item={item} />)}



          </div>
          <div className="row">
            <div className="col-12 text-center pagination_btn">
              <button> <i className="fa-solid fa-angle-left"></i> Prev </button>
              <button> Next <i className="fa-solid fa-angle-right"></i> </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AllPosts;