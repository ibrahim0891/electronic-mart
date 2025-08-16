'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiLogIn, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useAuth } from "../hooks/auth";

export default function Topbar() {

    const { user , isLoading } = useAuth();

 

    return (
        <div className='flex w-full justify-between items-center py-6 px-10 shadow-md'>
            <div>
                <Image
                    width={136}
                    height={44}
                    src={"/shop-logo.png"}
                    alt='shop logo'
                ></Image>
            </div>
            <div>
                <nav>
                    <ul className='flex items-center justify-between gap-6'>
                        {[
                            { name: "Home", link: "/" },
                            { name: "Contact", link: "/contact" },
                            { name: "About Us", link: "/about-us" },
                            { name: "Sign Up", link: "/auth/signup" },
                        ].map((item, index) => {
                            return (
                                <Link href={item.link} key={index} className='text-gray-500'>
                                    
                                    {item.name}
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <div className='bg-gray-100 flex items-center justify-around gap-4 px-2 py-1'>
                    <input
                        type='search'
                        name=''
                        id=''
                        className='focus:outline-0'
                    />
                    <button>
                        {" "}
                        <FiSearch />
                    </button>
                </div>
                {isLoading ? (
                    <p className='text-gray-500'>Loading...</p>
                ) : user ? (
                    <Link href={"/auth/profile"}>
                        <FiUser />
                    </Link>
                ) : (
                    <Link href={"/auth/login"}>
                        <FiLogIn />
                    </Link>
                )}
                <Link href={"/cart"}>
                    <FiShoppingCart />
                </Link>
            </div>
             
        </div>
    );
}
