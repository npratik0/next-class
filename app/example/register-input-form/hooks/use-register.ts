import { useState, ChangeEvent } from "react";

export const RegisterFormTask = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = () => {
        // const loginData = {
        //     username,
        //     email,
        //     password,
        //     confirmPassword
        // }
    
        // alert("Welcome "+ username);
        if(!username || !password || !confirmPassword || !email){
            alert("All fields required");
        }
        else if(password !=  confirmPassword){
            alert("Passwords don't match");
        }
        else{
            alert("Registered ")
        }
    }
    return{
            username, email, password, confirmPassword, handleUsername, handleEmail, handlePassword, handleConfirmPassword, handleSubmit

    }
    
}