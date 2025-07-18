import axios from 'axios';
import store from "@app/store";
import {setError} from '../feature/error/store/errorSlice';

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

export const api = axios.create({baseURL});

api.interceptors.request.use(
  (response) => response,
  (error) => {
    store.dispatch(setError(error.response?.data?.error?.message || '알 수 없는 오류가 발생했습니다.'));
    console.error('[AXIOS_REQUEST_ERROR]:', error);
    return Promise.reject(error);
  },
);
