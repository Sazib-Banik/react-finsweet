import React from 'react';
import AllPosts from '../../Components/AllPosts/AllPosts';
import BlogHeroPart from '../../Components/BlogHeroPart/BlogHeroPart';
import Category from '../../Components/Category/Category';
import JoinTeam from '../../Components/JoinTeam/JoinTeam';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <BlogHeroPart />
            <AllPosts />
            <Category />
            <JoinTeam />
        </>
    );
};

export default Blog;