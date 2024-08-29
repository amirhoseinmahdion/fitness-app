import { CartProvider } from "@mahdion/context/cartcontext";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import wheyimage from "../../public/images/image1.png";
import { sp } from "@mahdion/utils/replacenumber";
import { CiTrash } from "react-icons/ci";

const SelectedCart = () => {
    const { state, dispatch } = useContext(CartProvider);

    if (state.selecteditems.length === 0) {
        return <h1 className="text-center font-bold text-neutral-50  p-10">
            هیچ محصولی در سبد خرید نیست
        </h1>
    }
    return (
        <div className="lg:mx-48">
            {state.selecteditems.map((item) => (
                <div key={item.id} className="bg-purple flex justify-around align-baseline rounded-md my-4">
                    <Image
                        className=" border-solid   rounded-xl"
                        src={wheyimage}
                        alt="cartImage"
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col justify-around ">
                        {item.quantity === 1 ? <div className='flex justify-between align-baseline'>
                            <button onClick={() => dispatch({ type: "INCREASE", payload: item })} className="  hover:text-neutral-50 btn   btn-square text-xl  bg-graylight text-bgback "> +</button>
                            <span className='text-error  rounded-full bg-bgback hover:text-neutral-50 p-2 mx-2 '>{item.quantity}</span>
                            <button onClick={() => dispatch({ type: "REMOVE-ITEM", payload: item })} className="   hover:text-neutral-50   btn   btn-square text-xl  bg-graylight text-bgback "><CiTrash /></button>
                        </div> : <div className='flex justify-between align-baseline'>
                            <button onClick={() => dispatch({ type: "INCREASE", payload: item })} className="  hover:text-neutral-50 btn   btn-square text-xl  bg-graylight text-bgback "> +</button>
                            <span className='text-error  rounded-full bg-bgback hover:text-neutral-50 p-2 mx-2'>{item.quantity}</span>
                            <button onClick={() => dispatch({ type: "Decrease", payload: item })} className="  hover:text-neutral-50   btn   btn-square text-xl  bg-graylight text-bgback ">-</button>
                        </div>}
                    </div>


                    <div className=" flex flex-col justify-around align-baseline text-neutral-50 p-10  ">
                        <span>محصول : {item.title}</span>
                        <span>قیمت : {sp(item.price * item.quantity)} تومان</span>
                        <span>تعداد : {item.quantity}</span>
                    </div>


                </div>
            ))}
            <div className=" bg-purple flex justify-around items-center rounded-md my-4 lg:p-10">
                <button className="btn btn-outline hover:bg-bgback  text-neutral-50 bg-purple ">ثبت نهایی محصول</button>
                <div className="flex flex-col justify-around align-baseline text-neutral-50 ">
                    <span> نهایی قیمت : {sp(state.total)} تومان</span>
                    <span> نهایی تعداد : {state.itemscounter}</span>
                </div>
            </div>

        </div>
    );
};

export default SelectedCart;