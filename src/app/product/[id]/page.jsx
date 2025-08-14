import { sampleProduct } from "@/lib/demo-product";
import React from "react";
import { FiEye, FiHeart, FiMinus, FiPlus, FiStar } from "react-icons/fi";

export default function Product() {
    let product = sampleProduct;
    return (
        <div className='m-auto max-w-4xl my-24'>
            <div className='grid grid-cols-2 gap-12'>
                <div>
                    <img
                        src='https://lowendmac.com/wp-content/uploads/201916-640x453.png'
                        alt=''
                    />
                </div>

                <div className='space-y-4'>
                    <div className='space-y-3'>
                        <h1 className='text-2xl font-bold'> {product.title}</h1>
                        <div className='flex items-center'>
                            {[1, 2, 3, 4, 5].map((item) => {
                                return (
                                    <span className='text-yellow-500'>
                                        {" "}
                                        <FiStar fill='#f0b100' />{" "}
                                    </span>
                                );
                            })}
                            <span className='mx-2'>{product.rating}</span> |{" "}
                            <span className='ml-2'>
                                {" "}
                                {product.stock} unit avalable
                            </span>
                        </div>
                        <div>
                            <p className='line-through'> ${product.price}</p>
                            <p className='text-2xl'>
                                {" "}
                                ${product.discountPrice}
                            </p>
                        </div>
                        <p>{product.description}</p>
                    </div>

                    <div className='flex items-center gap-2 justify-start gap-4'>
                        <div className='flex border border-gray-300 rounded-md overflow-hidden h-12'>
                            <span className='p-4 flex items-center justify-center'>
                                <FiMinus />
                            </span>
                            <input
                                className='w-14 text-center border-x border-gray-400'
                                type='number'
                            />
                            <span className='p-4 bg-rose-500 text-white flex items-center justify-center'>
                                <FiPlus />
                            </span>
                        </div>

                        <button className='bg-rose-500 text-white rounded-md px-8 flex01 h-12 flex items-center justify-center'>
                            Buy now
                        </button>

                        <button className='border rounded-md w-12 h-12 aspect-square flex items-center justify-center'>
                            <FiHeart />
                        </button>
                    </div>
                </div>
            </div>

            <section className='mt-12'>
                <h1 className='text-2xl font-bold mb-4'>Product Details</h1>
                <div className='whitespace-pre-wrap leading-8 max-w-2xl text-gray-800'>
                    <p className='mb-2 font-semibold'>Brand: {product.brand}</p>
                    <p>
                        Product Description Product Model Clear screen film
                        protector for Macbook Size: 13.3 Air/ Pro m1 series 2020
                        Quantity: 2 pack Material: PC Features: Ultra clear
                        screen film, 1:1 mold fit for Macbook, 80% light
                        transmittance, higher than normal screen protector
                    </p>
                </div>
            </section>

            <section className='mt-12'>
                <h1 className='text-2xl font-bold mb-4'>
                    Product Specification
                </h1>

                <table className='table-auto border-collapse border border-gray-300 w-full'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border border-gray-300 px-4 py-2 text-left'>
                                Feature
                            </th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(product.specs).map(
                            ([key, value], index) => (
                                <tr key={index} className='hover:bg-gray-50'>
                                    <td className='border border-gray-300 px-4 py-2 font-medium'>
                                        {key}
                                    </td>
                                    <td className='border border-gray-300 px-4 py-2'>
                                        {value}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </section>

            <div className='mt-12 grid grid-cols-2'>
                <img
                    src='https://lowendmac.com/wp-content/uploads/201916-640x453.png'
                    alt=''
                />
                <img
                    src='https://lowendmac.com/wp-content/uploads/201916-640x453.png'
                    alt=''
                />
                <img
                    src='https://lowendmac.com/wp-content/uploads/201916-640x453.png'
                    alt=''
                />
                <img
                    src='https://lowendmac.com/wp-content/uploads/201916-640x453.png'
                    alt=''
                />
            </div>

            <div className='mt-12'>
                <h1 className='text-2xl font-bold mb-4'>Similar Product</h1>

                <div className='flex items-center gap-4 '>
                    {[1, 2,3].map((items, index) => {
                        return (
                            <div
                                key={index}
                                className='w-[500px] space-y-2 shadow rounded-md  '
                            >
                                <div className='p-5 bg-gray-100 relative'>
                                    <div className='bg-rose-500 px-4 py-1 rounded-md text-white absolute top-0 left-0 z-10 m-4'>
                                        40%
                                    </div>
                                    <div className='absolute top-0 right-0 p-4 text-3xl flex flex-col gap-4'>
                                        <FiHeart />
                                        <FiEye />
                                    </div>
                                    <img
                                        src='https://lowendmac.com/wp-content/uploads/201916-640x453.png'
                                        alt=''
                                        className='scale-75 mt-8'
                                    />
                                </div>
                                <h1 className='text-xl font-semibold'>
                                    {product.title}
                                </h1>
                                <p>{product.description.slice(0, 40)}... </p>
                                <p className='flex items-baseline'>
                                    {[1, 2, 3, 4, 5].map((item) => {
                                        return (
                                            <span className='text-yellow-500'>
                                                {" "}
                                                <FiStar fill='#f0b100' />{" "}
                                            </span>
                                        );
                                    })} 
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
