"use client";

import { axiosService } from "@/lib/axios-service";
import { useRouter } from "next/navigation";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useRouter();

    useEffect(() => {
        setIsLoading(true);
        axiosService
            .get("/auth/profile")
            .then((response) => { 
                console.log(response.data.user);
                setIsLoading(false);
                setUser(response.data.user); 
            })
            .catch((error) => {
                console.error("Error fetching user profile:", error);
                setIsLoading(false);  
                setUser(null);
            });
    }, [])

    let logout = () => {
      axiosService
        .post("/auth/logout")
        .then((res) => {
            setUser(null);
            setIsLoading(false); 
            console.log('Logged out'  , res); 
    
        })
        .catch((error) => {
            console.error("Error logging out:", error);
        });
    }

    console.log(children);

    return (
        <AuthContext.Provider value={{ user, isLoading , logout }}>
            {children}
        </AuthContext.Provider>
    );
};
