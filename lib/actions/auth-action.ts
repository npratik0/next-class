// server side rendering 

"use server";
import { success } from "zod";
import {register} from "../api/auth";
import { setAuthToken, setUserData } from "../cookie";

export const handleRegister = async(formData: any) => {
    try{
        // how data sent from componennt to backend api
        const res = await register(formData);
        // component return logic
        if(res.success){
            return{
                success: true,
                data: res.data,
                message: "Registration successful"
            };
        }
        return{success: false, message: res.message || "Registration failed"};
    }catch(err: Error | any){
        return{ success: false, message: err.message || "Registration failed"}
    }
}
