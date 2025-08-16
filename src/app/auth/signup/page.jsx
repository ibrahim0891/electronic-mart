"use client";

import Link from "next/link";
import React from "react";
import Input from "../components/input";
import Image from "next/image";
import { axiosService } from "@/lib/axios-service";

import { DotWave, Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = React.useState("ibrahim");
    const [password, setPassword] = React.useState("2342");
    const [varificationCode, setVarificationCode] = React.useState(76876);
    const [name, setName] = React.useState("ibraim");

    const [showError, setShowError] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const [success, setSuccess] = React.useState(false);

    const [varificationCodeLoading, setVarificationCodeLoading] =  React.useState(false);
    const [emailSent , setEmailSent] = React.useState(false);
    const navigate = useRouter();

    let handleSubmit = (e) => {
        setShowError(false);
        setErrors([]);
        setIsLoading(true);

        e.preventDefault();
        axiosService
            .post("/auth/register", {
                email,
                password,
                verificationCode: Number(varificationCode),
                name,
            })
            .then((res) => {
                console.log(res.data);
                setIsLoading(false);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setIsLoading(false);
                    navigate.push("/auth/login");
                }, 3000);
            })
            .catch((err) => {
                setShowError(true);
                setErrors(err.response.data.errors || []);
                setIsLoading(false);
            });
    };

    let getCode = (e) => {
        e.preventDefault();
        setVarificationCodeLoading(true);
        axiosService
            .post("/auth/sendCode", { email })
            .then((res) => {
                console.log(res.data.message); 
                setEmailSent(true);
                setShowError(false);
                setErrors([]);
                setVarificationCodeLoading(false);
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setShowError(true);
                setErrors(err.response.data.errors || []);
                setVarificationCodeLoading(false);
            });
    };

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
                <form action='' className='' onSubmit={(e) => handleSubmit(e)}>
                    <fieldset className='flex flex-col gap-10'>
                        <input
                            value={name}
                            className='p-2 border-b border-gray-300'
                            placeholder='Name '
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <div className='w-full flex items-center gap-4'>
                            <input
                                value={email}
                                className='p-2 border-b border-gray-300 w-full'
                                placeholder='Email Address'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                onClick={(e) => getCode(e)}
                                className='border w-48 p-2 rounded-md hover:bg-rose-500 hover:text-white'
                            >
                                {varificationCodeLoading ? (
                                    <Ring
                                        size='18'
                                        stroke='3'
                                        bgOpacity='0'
                                        speed='2'
                                        color='white'
                                    />
                                ) : (
                                    "Get Code"
                                )}
                            </button>
                        </div>
                        <input
                            value={varificationCode}
                            className='p-2 border-b border-gray-300'
                            placeholder='Enter e-mail varification code '
                            onChange={(e) =>
                                setVarificationCode(e.target.value)
                            }
                            required
                            type='number'
                        />
                        <input
                            value={password}
                            className='p-2 border-b border-gray-300'
                            placeholder='Password '
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type='passoword'
                        />
                    </fieldset>

                    {isLoading && (
                        <div className='flex justify-center mt-6'>
                            <Ring
                                size='36'
                                stroke='5'
                                bgOpacity='0'
                                speed='2'
                                color='red'
                            />
                        </div>
                    )}

                    {success && (
                        <p className='text-green-500 text-sm mt-4 '>
                            Account created successfully! <br /> Redirecting to
                            login...
                        </p>
                    )}

                    {showError &&
                        errors.map((error, index) => (
                            <p
                                key={index}
                                className='text-red-500 text-sm mt-2'
                            >
                                {error}
                            </p>
                        ))}

                    {emailSent && (
                        <p className='text-blue-500 text-sm mt-4'>
                            Verification code sent to your email!
                        </p>
                    )}

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
