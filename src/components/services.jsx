import Link from 'next/link';
import React from 'react';
import { IoIosFitness } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import ExcerciseIcon from '@mahdion/icon/excersice';
import SupplementIcon from '@mahdion/icon/supplementicon';
import ExerciseProgram from '@mahdion/icon/exerciseprogram';
import DietIcon from '@mahdion/icon/dieticon';


const Services = () => {
    return (
        <div className='text-center mt-6' id='Services'>
            <span className='text-purple text-xl font-bold'>خدمات ما</span>
            <h1 className='text-neutral-50 text-3xl mt-2'>ما در ایکس پاور چه خدماتی ارائه میکنیم؟ </h1>
            <div className='flex flex-col space-y-2 lg:space-y-0 lg:flex-row  justify-center  align-middle my-10'>
                <div className='flex flex-col mx-6 rounded-2xl justify-center  bg-graydark text-neutral-50 '>
                    <span className='p-3'> <ExcerciseIcon /></span>
                    <h1 className=' text-2xl  font-bold'>برنامه تمرینی</h1>
                    <span className='text-sm p-8 mb-10'>ارائه آنلاین برنامه تمرینی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند</span>
                    <Link className='flex justify-center mb-10 hover:bg-purple p-5' href="/diet">  <span className='  text-center text-xs'> ادامه مطلب</span><FaAngleLeft /></Link>
                </div>
                <div className='flex flex-col mx-6 rounded-2xl justify-center  bg-graydark text-neutral-50 '>
                    <span className='p-3'>  <DietIcon /></span>
                    <h1 className=' text-2xl  font-bold'>رژیم غذایی</h1>
                    <span className='text-sm p-8 mb-10'>ارائه آنلاین رژیمهای غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند</span>
                    <Link className='flex justify-center mb-10 hover:bg-purple p-5' href="/diet">  <span className='  text-center text-xs'> ادامه مطلب</span><FaAngleLeft /></Link>
                </div>
                <div className='flex flex-col mx-6 rounded-2xl justify-center  bg-purple text-neutral-50 '>
                    <span className='p-3'> <SupplementIcon /></span>
                    <h1 className=' text-2xl  font-bold'>مکمل های بدنسازی</h1>
                    <span className='text-sm p-8 mb-10'>ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی</span>
                    <Link className='flex justify-center mb-10 hover:bg-bgback p-5' href="/bodybuildingsupplements">  <span className='  text-center text-xs'> ادامه مطلب</span><FaAngleLeft /></Link>
                </div>
                <div className='flex flex-col mx-6 rounded-2xl justify-center  bg-graydark text-neutral-50 '>
                    <span className='p-3'>  <ExerciseProgram /></span>
                    <h1 className=' text-2xl  font-bold'>برنامه تمرینی</h1>
                    <span className='text-sm p-8 mb-10'>ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی</span>

                    <Link className='flex justify-center mb-10 hover:bg-purple p-5' href="/">  <span className='  text-center text-xs'> ادامه مطلب</span><FaAngleLeft /></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
