import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient