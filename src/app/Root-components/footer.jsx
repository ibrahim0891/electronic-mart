import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiSend, FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
        <div className='bg-gray-900 text-white p-20 flex items-start justify-between'>
            <section className='space-y-6'>
                <h3 className='footer-section-title'> Exclusive</h3>
                <h4 className='text-xl'>Subscribe</h4>
                <p>Get 10% off your first order</p>
                <div>
                    <form
                        action=''
                        className='flex items-center justify-around border p-3 px-4 rounded-lg'
                    >
                        <input type='email' placeholder='Enter your email' />
                        <FiSend />
                    </form>
                </div>
            </section>
            <section className='space-y-4 max-w-44'>
                <h3 className='footer-section-title'> Support</h3>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </section>

            <section className='space-y-4'>
                <h3 className='footer-section-title'> My Account</h3>
                <div className='flex space-y-4 flex-col'>
                    {[
                        "My Account",
                        "Login/Register",
                        "Cart",
                        "Whishlist",
                        "Shop",
                    ].map((item, index) => {
                        return (
                            <Link href={"#"} key={index}>
                                {" "}
                                {item}
                            </Link>
                        );
                    })}
                </div>
            </section>
            <section className='space-y-4'>
                <h3 className='footer-section-title'> Quick Link</h3>
                <div className='flex space-y-4 flex-col'>
                    {["Privacy Policy", "Terms of Use", "FAQ", "Contact"].map(
                        (item, index) => {
                            return (
                                <Link href={"#"} key={index}>
                                    {" "}
                                    {item}
                                </Link>
                            );
                        }
                    )}
                </div>
            </section>
            <section className='space-y-4'>
                <h3 className='footer-section-title'> Download app</h3>
                <div className='flex space-y-2 flex-col'>
                    <p>Save $3 with App New User Only</p>
                    <Image height={84} width={198} className="w-full" src={'/app-store-link.png'}></Image>

                    <div className="flex w-full gap-4 mt-4 items-center text-xl">
                        <FiFacebook/>
                        <FiTwitter/>
                        <FiInstagram/>
                        <FiLinkedin/>
                    </div>
                </div>
            </section>
        </div>
    );
}
