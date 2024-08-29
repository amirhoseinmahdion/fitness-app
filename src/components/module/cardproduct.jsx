import { sp } from '@mahdion/utils/replacenumber';
import Image from 'next/image';
import wheyimage from "../../../public/images/image1.png";
import { useContext, useState } from 'react';
import { CartProvider } from '@mahdion/context/cartcontext';
import { CiTrash } from "react-icons/ci";
import { GetQuantity } from '@mahdion/utils/function';

export const CardProduct = ({ product }) => {
    const { state, dispatch } = useContext(CartProvider)
    const indexitems = GetQuantity(state, product.id)
    const addproducthandler = (product) => {
        const tokens = window.localStorage.getItem('username')
        if (!tokens) {
            return null
        }
        dispatch({ type: "ADD-ITEMS", payload: product })
    }
    

    return (
        <div className=' flex flex-1 my-12 mx-10 lg:py-16   rounded-lg  bg-whiteback bg-opacity-35 flex-col justify-between items-center relative '>
            <Image className='absolute border-solid bottom-40 lg:-inset-8 lg:right-10 bg-graylight bg-opacity-40   rounded-xl' src={wheyimage} alt='productImage' width={200} height={200} />
            <div className='mt-32 flex flex-col items-center  justify-between'>
                <h3 className='text-neutral-50 my-5'>{product.title}</h3>
                <div className='flex  justify-around  text-neutral-50 mb-10'>
                    <span className='text-xl'>قیمت :</span>
                    <p className='text-xl'>{sp(product.price)} تومان </p>
                </div>
                {indexitems === 0 ? <button onClick={() => addproducthandler(product)} className="  hover:text-neutral-50  btn  btn-ghost btn-square text-2xl p-2 bg-graylight text-bgback ">+</button> : indexitems === 1 ? <div className='flex justify-between align-baseline'>
                <button onClick={() => dispatch({ type: "INCREASE", payload: product })} className="  hover:text-neutral-50 btn  btn-ghost btn-square text-2xl  bg-graylight text-bgback "> +</button>
                <span className='text-error  rounded-full bg-bgback p-2 mx-1  hover:text-neutral-50  '>{indexitems}</span>
                <button onClick={() => dispatch({ type: "REMOVE-ITEM", payload: product })} className="   hover:text-neutral-50 -bottom-4 right-36 btn  btn-ghost btn-square text-2xl p-2 bg-graylight text-bgback "><CiTrash /></button>
            </div> : <div className='flex justify-between align-baseline'>
                <button onClick={() => dispatch({ type: "INCREASE", payload: product })} className="  hover:text-neutral-50 btn  btn-ghost btn-square text-2xl  bg-graylight text-bgback "> +</button>
                <span className='text-error  rounded-full bg-bgback p-2  mx-1 hover:text-neutral-50  '>{indexitems}</span>
                <button onClick={() => dispatch({ type: "Decrease", payload: product })} className="  hover:text-neutral-50 -bottom-4 right-36 btn  btn-ghost btn-square text-2xl p-2 bg-graylight text-bgback ">-</button>
            </div>}
            </div>
          

        </div>
    );
};

export default CardProduct;