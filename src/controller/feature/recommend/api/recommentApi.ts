import {api} from '../../../api/axiosInstance';

export const getRecommendByProduct = async (productId: number) => {
    const response = await api.get(`/api/v1/recommend/${productId}`);
    return response.data;
};

export const getRecommendForHome = async () => {
    const response = await api.get('/api/v1/recommend/home');
    return response.data;
};