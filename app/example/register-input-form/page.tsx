"use client";

import { RegisterFormTask } from "./hooks/use-register";

export default function Page() {
    const form = RegisterFormTask();
    return (
        
        <div>
            <div>
                <label htmlFor="">Username:</label>
                <input type="email" value={form.username} onChange={form.handleUsername} className="border m-2"/>
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="email" value={form.email} onChange={form.handleEmail} className="border m-2"/>
            </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" value={form.password} onChange={form.handlePassword} className="border m-2" />
            </div>
            <div>
                <label htmlFor="">Confirm Password:</label>
                <input type="password" value={form.confirmPassword} onChange={form.handleConfirmPassword} className="border m-2" />
            </div>
            <button className="border p-2 m-2 w-15 rounded-2xl bg-green-500 " onClick={form.handleSubmit}>Test</button>
        </div>
        
        
    );
}