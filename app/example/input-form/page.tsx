"use client";
import { useState, ChangeEvent } from "react";

export default function Page() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        // e- event, target - element, value - current value of input
    }
    return (
        <div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" value={email} onChange={handleEmail} className="border"/>
            </div>
            <button className="border p-2 m-2 bg-green-500 " onClick={() => alert("Email: "+ email)}>Test</button>
        </div>
    );
}