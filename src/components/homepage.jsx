import React from 'react';
import imagehome from "../../public/images/imagehome.png"
import Image from 'next/image';
import { FaMedal } from "react-icons/fa";

const HomePage = () => {

    return (
        <div className='flex justify-center flex-col lg:flex-row align-baseline p-20' id=''>
            <div className='flex flex-col justify-start  align-baseline text-graylight '>
                <h1 className='text-2xl text-center lg:text-right lg:text-6xl font-extrabold mb-6' >هرآنچه برای رسیدن به یک بدن ایده آل نیاز دارید</h1>
                <p className=' sm:text-2xl text-center lg:text-right lg:text-3xl font-extrabold  text-gray' >تخصصی ترین وب سایت با مجوز رسمی</p>
                <div className='relative rounded-md sm:text-2xl  lg:text-3xl   bg-purple p-10  mt-6  lg:ml-7'>
                    <FaMedal className='absolute bottom-28  text-5xl left-4 bg-purple p-2  rounded-full' />
                    <p className='text-neutral-50 text-xl '  >با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته ورزشی جذاب قرار دهیم.</p>
                </div>
                <div className=' flex flex-col sm:flex-row justify-around text-center align-baseline mt-6'>
                    <div >
                        <h1 className='text-4xl  lg:text-6xl font-extrabold '>2000+
                        </h1>
                        <span className=' text-gray text-center'>کاربر فعال</span>
                    </div>
                    <div className="flex justify-center my-5 sm:my-0">
                        <div className=" divider w-28 h-1  divider-horizontal  sm:w-1 sm:h-28 bg-graylight"></div>
                    </div>
                    <div>
                        <h1 className='text-4xl  lg:text-6xl  font-extrabold '>250+</h1>
                        <span className=' text-gray text-center'>مکمل بدن سازی</span>
                    </div>
                    <div className="flex justify-center my-5 sm:my-0">
                        <div className=" divider w-28 h-1  divider-horizontal  sm:w-1 sm:h-28 bg-graylight"></div>
                    </div>
                    <div>
                        <h1 className='text-4xl  lg:text-6xl  font-extrabold '>1000+</h1>
                        <span className=' text-gray text-center'>رژیم غذایی انلاین</span>
                    </div>
                </div>

            </div>
            <div className='rounded-full bg-purple  w-full'>
                <Image className=' xl:w-full xl:h-full' src={imagehome} alt='imagehome' width={1000} height={1000} />
            </div>
        </div >
    );
};

export default HomePage;