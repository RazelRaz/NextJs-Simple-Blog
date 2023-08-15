'use client'

import Link from 'next/link';
import blogData from '../../data/blogData.json'

const BlogPage = () => {



    return (
        <div>
            <h1>Blog Page</h1>
            <div>
                <ul>
                    {blogData.map((post) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`}>
                            {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogPage