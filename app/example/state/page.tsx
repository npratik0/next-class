"use client";
// user interactivity/states

import { useEffect, useState } from "react";

export default function Page() {
    const [count,setCount] = useState(0);
    //state hooks
    // [value, setter, func]
    // state is variable that causes component to re-render when changed
    // when count changes, component using "count" re-renders

    const handlePlus = () =>{
        setCount(count+1);
    }

    const handleMinus = () => {
        setCount(count-1);
    }

    // dependancy check
    useEffect(() => {
        alert("Component Mounted");
    }, []);

    useEffect(() => {
        if (count == 0){
            alert("Count is zero")
        }
    }, [count]); // every time count changes, this function runs
    // [count, var2, ...] multiple dependencies can be watched


    return (
        // re-renders this when state changes
        <div>
            <div>Count: {count}</div>
            <button onClick={handlePlus}  className="border p-2 m-2 bg-blue-500 w-15 text-white rounded">+</button>
            <button onClick={handleMinus}  className="border p-2 m-2 bg-red-500 w-15 text-white rounded">-</button>
        </div>
    );
}