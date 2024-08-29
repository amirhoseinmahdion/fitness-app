import { ListMenu } from '@mahdion/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import zarinpal from "../../public/images/download.png"
import parspng from "../../public/images/parspng.png"
import ModalLogin from '@mahdion/components/modallogin';
import { Toaster } from 'sonner';
import ProfileIcon from '@mahdion/icon/profileicon';
import { useRouter } from 'next/router';
import { CiShoppingCart } from "react-icons/ci";
import { CartProvider } from '@mahdion/context/cartcontext';
import MenuMobile from '@mahdion/components/module/menumobile';



const LayoutPage = ({ children }) => {
    const [showmodal, setShowmodal] = useState(false)
    const { state, dispatch } = useContext(CartProvider)
    const [clsoe, setClsoe] = useState(false)
    const router = useRouter()
    const [token, setToken] = useState()
    useEffect(() => {
        const tokens = window.localStorage.getItem('username')
        setToken(tokens)

    }, [token])
    const cleartokenhandler = () => {
        localStorage.clear();
        router.reload()
    }
    return (
        <div>
            <Toaster position="top-center" richColors />
            <header className='flex justify-between align-baseline m-5 p-3' >
                <div className='flex flex-row justify-center align-baseline '>
                    <div className='md:hidden '><MenuMobile clsoe={clsoe} setClsoe={setClsoe} /></div>
                    <div className='hidden md:flex'>
                        {token && <Link href=""><ul className='list-none'><li className=' text-graydark bg-graylight font-bold   rounded-lg lg:p-4 p-1  hover:text-graydark'>پنل شخصی</li></ul></Link>}
                        {ListMenu.map(list => <ul key={list.id}>
                            <button onClick={() => router.push(`/${list.id}`)}>  <li className={list.id === router.asPath.split("/")[1] ? ' text-purple mx-1 rounded-lg lg:p-4 p-1' : ' mx-1   text-graylight  hover:bg-purple rounded-lg lg:p-4 p-1  hover:text-graydark'}>{list.name}</li></button>

                        </ul>)}
                    </div>
                </div>
                {clsoe ? <div className='hidden sm:flex'>
                    {token ? <div className='flex justify-center align-middle'><Link href="/cartshop" className=' text-neutral-50 mx-1 mt-1'><CiShoppingCart className='relative lg:text-5xl text-4xl' /><span className='text-purple font-bold absolute top-8 rounded-full bg-neutral-50 lg:px-2 px-1 '>{state.itemscounter}</span></Link><button onClick={() => setShowmodal(true)} className="btn btn-outline hover:bg-bgback  text-neutral-50 bg-purple"><ProfileIcon /> {token}</button> <button onClick={cleartokenhandler} className="btn btn-outline mr-2  text-graydark bg-error">خروج</button>  </div> : <button onClick={() => setShowmodal(true)} className="btn btn-outline hover:bg-bgback  text-graylight bg-purple"><ProfileIcon />ورود و ثبت نام  </button>}
                </div> : <div>
                    {token ? <div className='flex justify-center align-middle'><Link href="/cartshop" className=' text-neutral-50 mx-1 mt-1'><CiShoppingCart className='relative lg:text-5xl text-4xl' /><span className='text-purple font-bold absolute top-8 rounded-full bg-neutral-50 lg:px-2 px-1 '>{state.itemscounter}</span></Link><button onClick={() => setShowmodal(true)} className="btn btn-outline hover:bg-bgback  text-neutral-50 bg-purple"><ProfileIcon /> {token}</button> <button onClick={cleartokenhandler} className="btn btn-outline mr-2  text-graydark bg-error">خروج</button>  </div> : <button onClick={() => setShowmodal(true)} className="btn btn-outline hover:bg-bgback  text-graylight bg-purple"><ProfileIcon />ورود و ثبت نام  </button>}
                </div>}


            </header >
            {showmodal && !token ? <div className=' flex justify-center align-middle mt-20'><ModalLogin setShowmodal={setShowmodal} /></div> : children}
            <footer className='bg-purple w-full flex flex-col justify-around align-baseline  '>
                <div className='flex flex-col md:flex-row justify-around align-baseline my-5'>
                    <div className='text-graylight mb-2 flex flex-col justify-around text-center '>
                        <h1 className='text-bgback font-bold my-2'>راهنمایی مشتریان</h1>
                        <p>پاسخ پرسش</p>
                        <p>روش ارسال کالا</p>
                        <p>روش پرداخت</p>
                        <p>قوانین و مقررات</p>
                    </div>
                    <div className=' flex flex-row justify-center   align-baseline'>
                        <Image src={zarinpal} alt='zarinpal' width={300} height={200} />
                        <Image src={parspng} alt='parspng' width={200} height={200} />
                    </div>

                </div>
                <p className='text-center bg-bgback bg-opacity-30 text-graylight p-2 my-3'>    کلیه حقوق متعلق به این سایت میباشد</p>
            </footer>


        </div >
    );
};

export default LayoutPage;


