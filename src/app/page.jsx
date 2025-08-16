"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import "./globals.css";
import { useEffect, useState } from "react";
import { axiosService } from "@/lib/axios-service";
import { useAuth } from "./hooks/auth";
import { useRouter } from "next/navigation";

export default function Home() {
    const { user, isLoading, logout } = useAuth();

    const navigate = useRouter();
    console.log(user, isLoading);

    return (
        <div>
            {isLoading ? (
                <div className='flex items-center justify-center h-screen'>
                    <p className='text-2xl'>Loading...</p>
                </div>
            ) : user ? (
                <div className='flex flex-col items-center justify-center h-screen'>
                    <h1 className='text-3xl font-bold mb-4'>
                        Welcome, {user.name}!
                        {
                            user.email && <span className='text-sm text-gray-500'> ({user.email})</span>    
                        }
                    </h1>
                    <button
                        onClick={logout}
                        className='px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className='flex items-center justify-center h-screen'>
                    <p className='text-2xl'>Please log in.</p>
                    <button
                        onClick={() => navigate.push("/auth/login")}
                        className='ml-4 px-4 py-2 bg-blue-500 text-white rounded'
                    >
                        Go to Login
                    </button>                    
                </div>
            )}
        </div>
    );
}
