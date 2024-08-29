import { useEffect, useState } from 'react';
import CardProduct from './module/cardproduct';

const ProductPage = () => {
    const [products, setProducts] = useState([])
    if (!products) return <h1>در حال بارگذاری</h1>
    const fetchData = async () => {
        const res = await fetch("https://fitness-api-app-orcin.vercel.app/products")
        const data = await res.json()
        setProducts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='text-center mt-6' id='shop' >
            <span className='text-purple text-xl  font-bold'>محصولات</span>
            <h1 className='text-neutral-50 text-3xl my-6 '>جدیدترین محصولات</h1>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item flex flex-col lg:flex-row relative w-full">
                    {products.slice(0, 4).map(product => <CardProduct key={product.id} product={product} />)}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between -mx-5">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item flex flex-col lg:flex-row relative w-full">
                    {products.slice(4, 8).map(product => <CardProduct key={product.id} product={product} />)}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between -mx-5">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item flex flex-col lg:flex-row relative w-full">
                    {products.slice(8, 12).map(product => <CardProduct key={product.id} product={product} />)}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between -mx-5">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;