import React, { useEffect, useState } from 'react';
import { ListMenu } from '@mahdion/constant/constant';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const MenuMobile = ({ clsoe, setClsoe }) => {
    const [token, setToken] = useState()
    const router = useRouter()

    useEffect(() => {
        const tokens = window.localStorage.getItem('username')
        setToken(tokens)

    }, [token])

    return (
        <>
            {!clsoe ? <IoMdMenu onClick={() => setClsoe(!clsoe)} className='text-4xl text-neutral-50' /> : (<div className='bg-purple rounded text-neutral-950 p-10 font-bold   '>
                <IoCloseSharp onClick={() => setClsoe(!clsoe)} className='text-4xl transition  ' />
                <div className='flex flex-col justify-center items-center p-10 '>
                    {token && <Link href=""><ul className='list-none'><li className=' text-neutral-50 bg-bgback font-bold   rounded-lg p-4  hover:text-graydark'>پنل شخصی</li></ul></Link>}
                    {ListMenu.map(list => <ul key={list.id}>
                        <button onClick={() => router.push(`/${list.id}`)}>  <li className={list.id === router.asPath.split("/")[1] ? ' text-bgback mx-1 rounded-lg p-4 ' : ' mx-1  text-neutral-950  hover:bg-bgback rounded-lg p-4   hover:text-neutral-50'}>{list.name}</li></button>

                    </ul>)}
                </div>
            </div>)}

        </>
    );
};

export default MenuMobile;