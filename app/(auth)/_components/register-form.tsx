// import Link from "next/link";
// export default function RegisterForm() {
//     return (
//         <div className="mx-auto max-w-md border m-2 p-4 rounded">
//             <div className="m-1">
//                 <label className="block mb-2 font-semibold">Email:</label>
//                 <input className="p-1 border" />
//             </div>
//             <div className="m-1">
//                 <label className="block mb-2 font-semibold">Full Name</label>
//                 <input className="p-1 border" />
//             </div>
//             <div className="m-1">
//                 <label className="block mb-2 font-semibold">Password:</label>
//                 <input type= "password"className="p-1 border" />
//             </div>
//             <div className="m-1">
//                 <label className="block mb-2 font-semibold">Confirm Password:</label>
//                 <input type= "password"className="p-1 border" />
//             </div>
//             <button className="bg-green-500  w-100 border rounded p-2 mt-2 text-white">Register</button>
//             <div>
//                 Already have an have account?
//                 <Link href="/login" className = "text-blue-500 underline">Login</Link> 
//             </div>

//         </div>
//     );
// }


"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { handleRegister } from "@/lib/actions/auth-action";

export const registerSchema = z.object(
    {
        email: z.email({ message: "Email milena" }),
        username: z.string().min(3, { message: "Username pugena" }),
        firstName: z.string().min(1, { message: "First Name pugena" }),
        lastName: z.string().min(1, { message: "Last Name pugena" }),
        confirmPassword: z.string().min(6, { message: "Confirm Password pugena" }),
        password: z.string().min(6, { message: "Password pugena" })
    }
).refine((data) => data.password === data.confirmPassword,
    {
        message: "Passwords do not match",
    }
);

export type RegisterForm = z.infer<typeof registerSchema>;

export default function Page() {
    const router = useRouter();
    const [pending, setTransition] = useTransition()
    const { register, handleSubmit, formState: { errors, isSubmitting } }
        = useForm<RegisterForm>(
            {
                resolver: zodResolver(registerSchema),
            }
        )
    const onSubmit = async (data: RegisterForm) => {
        // alert(data.email);

    }
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
                className="mx-auto p-2 max-w-xl border">
                <div className="mt-2">
                    <label>Email</label>
                    <input {...register("email")}  className="border"/>
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
        
                <div className="mt-2">
                    <label>Username</label>
                    <input {...register("username")} className="border" />
                    {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                </div>

                <div className="mt-2">
                    <label>First Name</label>
                    <input {...register("firstName")} className="border" />
                    {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                </div>

                <div className="mt-2">
                    <label>Last Name</label>
                    <input {...register("lastName")} className="border" />
                    {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                </div>

                <div className="mt-2">
                    <label>Password</label>
                    <input type="password" {...register("password")} className="border" />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </div>
 
                <div className="mt-2">
                    <label>Confirm Password</label>
                    <input type="password" {...register("confirmPassword")} className="border" />
                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                </div>

                <button type="submit" className="p-2 bg-green-500 mt-4">Submit</button>
            </form>
        </div>
    );
}