import React from 'react';
import { CiVideoOn } from 'react-icons/ci';

const CardTraining2 = () => {
    return (
        <div className="    flex flex-col justify-around  p-8   w-full  lg:w-2/5   bg-purple rounded-md text-right ml-2 ">
            <div className='flex md:justify-center justify-start ' >
                <CiVideoOn className='text-4xl text-neutral-50 ml-2' />
                <h1 className='text-neutral-50 text-3xl '>ویدیوآموزشی</h1>
            </div>
            <div className='mt-10'>
                <p className='text-neutral-50 text-lg text-right my-2'> آموزش سینه</p>
                <p className='text-neutral-50 text-sm '>هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.</p>
            </div>
        </div>
    );
};

export default CardTraining2;