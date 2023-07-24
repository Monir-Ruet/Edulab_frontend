import axios from 'axios';
import { cookies } from 'next/headers';
const axiosServer = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

axiosServer.interceptors.request.use(
    (config) => {
        const accessToken = cookies().get('auth_token')?.value;
        if (accessToken) {
            if (config.headers) config.headers.Authorization = "Bearer " + accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosServer;
