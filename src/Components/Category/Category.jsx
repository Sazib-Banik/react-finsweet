import React, { useEffect, useState } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Category.css';

const Category = () => {
    const [catItem, setCatItem] = useState([]);
    useEffect(() => {
        fetch('catItem.json')
        .then(res => res.json())
        .then(data => setCatItem(data))
    },[])
    return (
        <section id="catagory_part">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading">
              <h2>Choose A Catagory</h2>
            </div>
          </div>
          <div className="row">
            {catItem.map(item=><CategoryItem key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    );
};

export default Category;