import Image from 'next/image';
import React from 'react';
import imageblog from "../../../public/images/imageblog.png";
import { useRouter } from 'next/router';
import Link from 'next/link';


const BlogCard = ({ blog }) => {
    const router = useRouter()
    return (
        <div className='mx-10 bg-graydark flex flex-col justify-around lg:w-1/3 '>
            <Image className=' border-solid  w-full   rounded-xl' src={imageblog} alt='imageblog' width={1000} height={1000} />
            <div className='m-10'>
                <h1 className='text-neutral-50 font-extrabold mb-6 '>{blog.title}</h1>
                <p className='text-gray text-sm '>{blog.content}</p>
            </div>
            <Link href={`/blogs/${blog.id}`}> <button className="btn btn-ghost  outline-none text-neutral-100 hover:bg-purple"> <span className='text-neutral-50 text-xl'>❯</span></button></Link>
        </div>
    );
};

export default BlogCard;