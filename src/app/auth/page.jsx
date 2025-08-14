import React from "react";
import Login from "./signup/page";
import Link from "next/link";

export default function Authpage() {
    return (
        <div>
            <Login />
            <Link href={"/auth/signup"}> Dont have an account, signup</Link>
        </div>
    );
}
