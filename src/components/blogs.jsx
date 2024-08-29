import React, { useEffect, useState } from 'react';
import BlogCard from './module/blogcard';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const res = await fetch("https://fitness-api-app-orcin.vercel.app/blogs")
        const data = await res.json()
        setBlogs(data)
    }
    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div className=' text-center my-20 ' id='blog'>
            <h1 className='text-neutral-50 text-3xl mb-4  '>جدیدترین مقالات</h1>
            <div className='flex flex-col lg:flex-row space-y-3 justify-center '>
                {blogs.slice(0, 3).map(blog => <BlogCard key={blog.id} blog={blog} />)}
            </div>
        </div>
    );
};

export default BlogsPage;