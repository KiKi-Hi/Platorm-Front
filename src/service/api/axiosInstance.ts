import axios from "axios";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: {
        message: string;
        code?: string | number;
        [key: string]: any;
    };
}

const baseURL = process.env.REACT_APP_BASE_URL;
if (!baseURL) throw new Error('Missing REACT_APP_BASE_URL');

export const api = axios.create({
    baseURL,
    withCredentials: true,
});

api.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.error('[AXIOS_REQUEST_ERROR]:', error);
        return Promise.reject(error);
    }
);
