"use client"
import {useForm} from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema,LoginForm } from "./schema";
import Image from "next/image";
import image1 from '@/app/assets/image1.jpg';


export default function Page() {
    const {register, handleSubmit, formState: {errors, isSubmitting}}
        = useForm<LoginForm>(
            {
                resolver: zodResolver(loginSchema),
                values: {email: "xyz", password: "abc"} // initial(option)
            }
        )
    const onSubmit = async(data: LoginForm) => {
        alert(data.email);
    }
    return (
        <div>
            
        </div>
    );
}
    
