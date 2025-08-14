import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Topbar() {
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
                <FiUser></FiUser>
                <FiShoppingCart />
            </div>
        </div>
    );
}
