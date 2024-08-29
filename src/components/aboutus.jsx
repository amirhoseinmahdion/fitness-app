import React from 'react';
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className='bg-graydark flex flex-col lg:flex-row justify-around align-baseline lg:mx-32 text-center' >
            <h1 className='text-neutral-50 font-extrabold lg:p-6 '>شماره تماس : 09397009989 </h1>
            <div className='flex flex-col lg:flex-row  justify-around align-middle text-4xl mt-4 text-neutral-50'>
                <p className='text-neutral-50 text-2xl font-extrabold mx-2 '>ما را در شبکه های اجتماعی دنبال کنید</p>
                <div className='flex flex-row  justify-center my-2 sm:my-0'>
                    <Link className='mx-2 ' href="/"><PiTelegramLogo /></Link>
                    <Link className='mx-2' href="/"> <FaInstagram /></Link>
                    <Link className='mx-2' href="/"><FaWhatsapp /></Link>
                    <Link className='mx-2' href="/"> <CiLinkedin /></Link>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;