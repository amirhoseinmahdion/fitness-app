import React from 'react';
import detailImage from "../../public/images/detailimage.png"
import Image from 'next/image';
import Link from 'next/link';

const DetailPage = () => {
    return (
        <div className=' lg:my-6 lg:px-32 flex flex-col lg:flex-row justify-between align-baseline' id='aboutus'>
            <div className='flex text-center lg:text-right flex-col justify-around align-baseline w-full'>
                <h1 className='text-lg  lg:text-6xl text-neutral-50 font-extrabold w-full ' >برنامه تمرینی کاملا اختصاصی برای شما...</h1>
                <p className='text-gray text-sm lg:text-lg w-full'  >هر کسی با یه هدفی ورزش میکنه، کاهش وزن ،افزایش وزن، بدنسازی، حفظ تناسب اندامش ، آسیب جسمانی خیلیا هم نمیذاره بعضی از حرکات رو انجام بدن ، با ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط خودتون دریافت خواهید کرد.</p>
                <div className=' flex flex-col lg:flex-row justify-start align-baseline my-4'>

                    <button className="btn mb-4 lg:mb-0 bg-purple btn-ghost text-neutral-100">دریافت برنامه تمرینی</button>
                    <Link href="https://instagram.com/mahdionprv/"><button className="btn mb-4 lg:mb-0 btn-ghost  lg:mr-5 outline-none text-neutral-100 hover:bg-purple">مشاهده نظر کاربران      <span className='text-neutral-50 text-xl'>❯</span></button></Link>


                </div>
            </div>
            <div>
                <Image src={detailImage} alt='detailImage' className='rounded-lg ' width={1000} height={800} />
            </div>

        </div>
    );
};

export default DetailPage;