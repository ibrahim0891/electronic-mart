import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
    return (
        <div className='flex my-16 gap-12 mx-auto  items-center justify-center'>
            <div className="">
                <img
                    src='https://cdn0.iconfinder.com/data/icons/web-illustrations-2/600/199-512.png'
                    alt=''
                />
            </div>
            <div className='flex flex-col gap-12  w-1/3 '>
                <div>
                    <h1 className='text-4xl font-bold'>Log in to Elcon </h1>
                    <p className='text-xl font-normal mt-6'>
                        Enter your details below
                    </p>
                </div>
                <form action='' className=''>
                    <fieldset className='flex flex-col gap-10'>
                        <input
                            className='p-2 border-b border-gray-300'
                            placeholder='Email Address '
                        />
                        <input
                            className='p-2 border-b border-gray-300'
                            placeholder='Password '
                            type='passoword'
                        />
                    </fieldset>

                    <div className=' flex items-center justify-between  mt-10'>
                        <button className='py-3 px-4 text-lg text-white text-center bg-rose-600  rounded-md'>
                            Log in
                        </button>
                        <Link href={"/null"}> Forget password? </Link>
                    </div>

                    <p className='mt-8 text-center'>
                        Don't have an account?{" "}
                        <Link
                            className='text-blue-500 text-center hover:text-underline'
                            href={"/auth/signup"}
                        >
                            {" "}
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
