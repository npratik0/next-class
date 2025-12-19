"use client";

import { resolve } from "path";
import { loginAction } from "./actions/login";
import { useState, useTransition } from "react";

export default function Page() {
    const [username, setUsername] = useState("");
    const [isPending, startTransition] = useTransition();
    const handleSubmit = () => {
        startTransition (async () => {
            try{
                await new Promise (resolve => setTimeout(resolve,2000)); //simulate delay
                await loginAction(username);
            }catch(err: Error | any){
                alert(err.message ?? "Form error")
            }
        });
        // navigation will be pending and won't block ui
        // can use state isPending to show loading indicator
    }
    return (
        <div className="mx-auto max-w-md border p-4">
            <label>Username</label>
            <input className="border m-2" onChange={(e) => setUsername(e.target.value)} />
            <div>
                <button disabled={isPending} className="p-2 bg-green-500 disabled:bg-gray-400" onClick={handleSubmit}>
                    {isPending ? "Loading..." : "Submit"}
                </button>
            </div>
        </div>
    );
}