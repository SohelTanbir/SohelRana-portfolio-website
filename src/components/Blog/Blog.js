import React from 'react';
import './Blog.css';

import img1 from '../../images/portfolio/portfolio-1.png';
import img2 from '../../images/portfolio/portfolio-2.png';
import img3 from '../../images/portfolio/portfolio-3.png';
import { Blogs } from '../../Data/Data';

const posts = [
    {
        id: 1,
        title: 'Why I Switched to Sketch For UI Design',
        excerpt:
            'In the world of web development, staying ahead of the curve is crucial. One technology stack that has...',
        img: img1,
        date: '05 Mar 2020',
        category: 'Design',
    },
    {
        id: 2,
        title: 'Best Practices for Animated Progress Indicators',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
        img: img2,
        date: '23 Feb 2020',
        category: 'UI',
    },
    {
        id: 3,
        title: 'Designing the Perfect Feature Comparison Table',
        excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
        img: img3,
        date: '06 Feb 2020',
        category: 'Design',
    },
];

const Blog = () => {
    return (
        <section className="blog-section" id="blog">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Latest Blogs</h2>
                    <p className="section-lead">
                        Explore my latest blogs, sharing insights, tips, and experiences from the world of web development and modern tech.
                    </p>
                </div>

                <div className="blog-grid">
                    {Blogs.map((blog) => (
                        <article className="blog-card" key={blog.id}>
                            <div className="card-media">
                                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                    <img src={blog.thumbnail} alt={blog.title} />
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="card-meta">
                                    <span className="card-date">{blog.date}</span>
                                </div>
                                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="card-title">{blog.title}</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;