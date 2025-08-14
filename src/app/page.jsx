"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import "./globals.css";
import { useState } from "react";

export default function Home() {
    // 1. Use a boolean for your state. `true` means on, `false` means off.
    const [isOn, setIsOn] = useState(true); // Let's start with it being 'on'

    // You can see the state change in the console
    console.log("Switch is currently:", isOn ? "on" : "off");

    return (
        <div>
            <Tabs defaultValue='account' className='w-[400px]'>
                <TabsList>
                    <TabsTrigger value='account'>Account</TabsTrigger>
                    <TabsTrigger value='password'>Password</TabsTrigger>
                </TabsList>
                <TabsContent value='account'>
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value='password'>
                    Change your password here.
                </TabsContent>
            </Tabs>

            <div className='p-4 rounded-md'>
                <Switch
                    // 2. The switch's visual state is now controlled by your `isOn` variable.
                    checked={isOn}
                    // 3. When the switch is clicked, it calls setIsOn with the new value.
                    // If it was on, it calls setIsOn(false). If it was off, it calls setIsOn(true).
                    onCheckedChange={setIsOn}
                />
            </div>
        </div>
    );
}
