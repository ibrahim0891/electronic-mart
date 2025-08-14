import Link from "next/link";
import React from "react";
import Input from "../components/input";
import Image from "next/image";

export default function Login() {
    return (
        <div className='flex my-16 gap-12 items-center justify-center mt-28'>
            <div>
                <img
                    src='https://cdn0.iconfinder.com/data/icons/web-illustrations-2/600/199-512.png'
                    alt=''
                />
            </div>
            <div className='flex flex-col gap-12 w-1/3'>
                <div>
                    <h1 className='text-4xl font-bold'>Create an Account </h1>
                    <p className='text-xl font-normal mt-6'>
                        Enter your details below
                    </p>
                </div>
                <form action='' className=''>
                    <fieldset className='flex flex-col gap-10'>
                        <input
                            className='p-2 border-b border-gray-300'
                            placeholder='Name '
                        />
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
                    <div>
                        <button className='py-4 text-lg text-white text-center bg-rose-600 w-full rounded-md mt-10'>
                            Create account
                        </button>
                        <button className='py-4 text-lg border  border-gray-300 text-center  w-full rounded-md mt-4 flex items-center gap-4 justify-center'>
                            <Image
                                src='https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-512.png'
                                alt='google logo'
                                height={24}
                                width={24}
                            />
                            <span> Sign up with Google</span>
                        </button>
                    </div>

                    <p className='mt-8 text-center'>
                        Already have an account?{" "}
                        <Link
                            className='text-blue-500 text-center hover:text-underline'
                            href={"/auth/login"}
                        >
                            {" "}
                            Log in{" "}
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
