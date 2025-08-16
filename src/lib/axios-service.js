
import axios from "axios";

export const axiosService = axios.create({
    baseURL: 'https://computer-vision-backend.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true
});
