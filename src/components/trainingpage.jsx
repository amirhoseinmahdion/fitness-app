import React from 'react';
import CardTraning from './traningscomponments/cardtraining';
import CardTraining1 from './traningscomponments/cardtraining1';
import CardTraining2 from './traningscomponments/cardtraining2';
import { useRouter } from 'next/router';


const TrainingPage = () => {
    const router = useRouter()
    return (
        <div className=' text-center lg:mx-20 '>
            <h1 className='text-neutral-50 text-3xl mb-4  '>آموزش ها</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full flex flex-col lg:flex-row justify-around">
                    <CardTraning />
                    <video className='w-full  lg:w-3/5  ' controls  >
                        <source src="/public/testtraning.mp4" type="video/mp4" />
                    </video>

                </div>
                <div id="item2" className="carousel-item w-full flex flex-col lg:flex-row justify-around  ">
                    <CardTraining1 />
                    <video className='w-full  lg:w-3/5  ' controls  >
                        <source src="/public/testtraning.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="item3" className="carousel-item w-full flex flex-col lg:flex-row justify-around  ">
                    <CardTraining2 />
                    <video className='w-full  lg:w-3/5  ' controls  >
                        <source src="/public/testtraning.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>
            <div className="join my-10">
                <a href="#item1" onClick={() => router.push("/#item1")}>
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label="1"
                        defaultChecked />
                </a>
                <a href="#item2" onClick={() => router.push("/#item2")} >
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                </a>
                <a href="#item3" onClick={() => router.push("/#item3")} >
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" /></a>
            </div>

        </div >
    );
};

export default TrainingPage;