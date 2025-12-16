"use client";
import { useState, ChangeEvent } from "react";
import { useLoginPage } from "./hooks/use-login";

export default function Page() {
    const{
        email,
        password,
        handleEmail, 
        handlePassword, 
        handleSubmit
    } = useLoginPage(); // destructure retuned object from hook

    const form = useLoginPage();  // entire object
    return (
        <div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" value={form.email} onChange={handleEmail} className="border m-2"/>
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" value={password} onChange={handlePassword} className="border m-2" />
            </div>
            <button className="border p-2 m-2 w-15 rounded-2xl bg-green-500 " onClick={handleSubmit}>Test</button>
        </div>
    );
}