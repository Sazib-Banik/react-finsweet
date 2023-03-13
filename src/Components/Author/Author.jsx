import React, { useEffect, useState } from 'react';
import AuthorBox from '../AuthorBox/AuthorBox';
import './Author.css';

const Author = () => {
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        fetch('AuthorBox.json')
        .then(res => res.json())
        .then(data => setAuthor(data))
    },[])
    return (
        <section id="author">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center heading">
              <h2>List of Authors</h2>
            </div>
          </div>
          <div className="row">
            {author.map(item => <AuthorBox key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    );
};

export default Author;