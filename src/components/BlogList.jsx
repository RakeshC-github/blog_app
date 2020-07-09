import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogDetails from './BlogDetails';

const BlogList = ({blogsViaProps}) => {
    let { blogs } = useContext(BlogContext);
    const [filterBlogs, setfilterBlogs] = useState(blogsViaProps || blogs);
    useEffect(()=> {
        setfilterBlogs(blogs)
    },[blogs])
    const handleSearch = (searchquery) => {
        if (searchquery) {
            let filterBlogs = blogs.filter(blog => {
                if (blog.title.toLowerCase().startsWith(searchquery.toLowerCase())) {
                    return blog;
                }else if (blog.content.toLowerCase().startsWith(searchquery.toLowerCase())){
                    return blog;
                }
            });
            setfilterBlogs(filterBlogs);
        } else {
            setfilterBlogs(blogs);
        }
    }
    return filterBlogs.length ? (
        <React.Fragment>
            <div className="book-list">
                <input type="search" placeholder="Search Blog"
                    onChange={(e) => handleSearch(e.target.value)} />
                <ul>
                    {filterBlogs.map(blog => {
                        
                        return (<BlogDetails blog={blog} key={blog.id} />);
                    })}
                </ul>
            </div>
        </React.Fragment>
    ) : (
            <div className="empty" ><p style={{color:"red"}}>No blogs to read. Click new post to post blog</p></div>
        );
}

export default BlogList;