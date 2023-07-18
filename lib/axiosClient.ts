import axios from 'axios';
import { cookies } from 'next/headers';
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

axiosClient.interceptors.request.use(
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

export default axiosClient;