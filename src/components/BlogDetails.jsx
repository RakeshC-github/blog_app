import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const BlogDetails = ({ blog }) => {
    const { dispatch } = useContext(BlogContext);
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_BLOG', id: blog.id})}>
            <div className="title">{blog.title}</div>
            <div className="content">{blog.content}</div>
        </li>
    );
}

export default BlogDetails;