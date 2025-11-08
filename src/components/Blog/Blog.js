import React from 'react';
import './Blog.css';

import img1 from '../../images/portfolio/portfolio-1.png';
import img2 from '../../images/portfolio/portfolio-2.png';
import img3 from '../../images/portfolio/portfolio-3.png';

const posts = [
    {
        id: 1,
        title: 'Exploring MERN Stack: Powering Modern Web Development',
        excerpt:
            'In the world of web development, staying ahead of the curve is crucial. One technology stack that has...',
        img: img1,
    },
    {
        id: 2,
        title: 'Test webhook',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
        img: img2,
    },
    {
        id: 3,
        title: 'The Power of UI/UX: Elevating Digital Experiences',
        excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
        img: img3,
    },
];

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="section-header">
                    <span className="kicker">BLOG</span>
                    <h2 className="section-title">Latest Blogs</h2>
                    <p className="section-lead">
                        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                    </p>
                </div>

                <div className="blog-grid">
                    {posts.map((post) => (
                        <article className="blog-card" key={post.id}>
                            <div className="card-media">
                                <img src={post.img} alt={post.title} />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                <p className="card-excerpt">{post.excerpt}</p>
                                <a className="read-more" href="#">Read More</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;