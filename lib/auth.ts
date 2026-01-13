// Actual backend API calls

import axios from "./api/axios";
import { API } from "./api/endpoints";

export const register = async(registerData: any) => {
    try {
        const response = await axios.post(API.AUTH.REGISTER, registerData);
        return response.data; // response ko body(what backend returns)
    } catch (err: Error | any) {
        // if 4xx/5xx error, axios throws error
        throw new Error(
            err.response?.data?.message // bCKEND ERROR MESSAGE
            || err.message              // general axios error message
            || "Registration failed"    // fallback message
        )
    }
};
    