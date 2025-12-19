"use client";
// client side page redirection
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const handleSubmit = () => {
        // logic
        if (username == "admin"){
            router.push("/example/input-form");
        }else{
            router.push("/example/state")
        }
    }
    return (
        <div className="mx-auto max-w-md border p-4">
            <label >Username: </label>
            <input className="border m-2" onChange={(e) => setUsername(e.target.value)} />
            <div>
                <button className="p-2 b-2 bg-green-500 text-white rounded" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}