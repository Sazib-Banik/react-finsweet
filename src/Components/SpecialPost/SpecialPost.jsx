import React from 'react';
import './SpecialPost.css';

const SpecialPost = () => {
    return (
        <section id="special_post">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="special_post_box">
                            <img src='https://i.ibb.co/xCWX8zq/special-img.png' alt="special-box" />
                            <div className="special_post_content">
                                <div className="special_post_part">
                                    <p className="special_post_text">Why we started</p>
                                    <h1>
                                        It started out as a simple <br />
                                        idea and evolved into our <br />passion
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip.
                                    </p>
                                    <button className="theme_btn">
                                        Discover our story <i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SpecialPost;