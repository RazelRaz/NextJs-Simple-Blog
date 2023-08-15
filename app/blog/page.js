'use client'

import Link from 'next/link';
import blogData from '../../data/blogData.json';
import styles from './blog.module.css'

const BlogPage = () => {



    return (
        <div className={styles.blogArea}>
            <h1>Blog Page</h1>
            <div>
                <ul>
                    {blogData.map((post) => (
                        <li key={post.id} >
                            <Link href={`/blog/${post.id}`}>
                                {post.id}.{post.title}
                                <span>{post.date}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogPage