"use client";
import { useAuth } from "@/app/hooks/auth";
import { axiosService } from "@/lib/axios-service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const { user, isLoading } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        axiosService
            .post("/auth/login", {
                email: email,
                password: password,
            })

            .then((response) => {
                console.log("Login successful:", response.data);

                setTimeout(() => {
                    setLoading(false);
                    window.location.href = "/";
                }, 1000);
            })

            .catch((error) => {
                console.error("Login failed:", error);
                setError("Login failed. Please check your credentials.");
                setLoading(false);
            });
    };
    const navigate = useRouter();

    {
        isLoading ? (
            <div className='flex items-center justify-center h-screen'>
                <p className='text-2xl'>Loading...</p>
            </div>
        ) : user ? (
            navigate.push("/")
        ) : null;
    }
    return (
        <div className='flex my-16 gap-12 mx-auto  items-center justify-center'>
            <div className=''>
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
                <form onSubmit={(e) => handleLogin(e)}>
                    <fieldset className='flex flex-col gap-10'>
                        <input
                            className='p-2 border-b border-gray-300'
                            placeholder='Email Address '
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='p-2 border-b border-gray-300'
                            placeholder='Password '
                            type='passoword'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </fieldset>

                    {error && <div className='text-red-500 mt-4'>{error}</div>}

                    <div className=' flex items-center justify-between  mt-10'>
                        <button
                            type='submit'
                            className='py-3 px-4 text-lg text-white text-center bg-rose-600  rounded-md'
                        >
                            {loading ? "Logging in..." : "Log in"}
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
