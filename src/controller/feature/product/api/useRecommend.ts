import { useQuery } from 'react-query';
import {api} from "../../../api/axiosInstance";

interface Recommendation {
    id: string;
    thumbnail: string;
    category: string;
    manufacturerName: string | null;
    productName: string;
    discountedPrice: string;
    likedByMe: boolean;
}

interface RecommendationResponse {
    success: boolean;
    code: number;
    message: string;
    data: Recommendation[];
}

const fetchRecommendations = async (): Promise<Recommendation[]> => {
    const response = await api.get<RecommendationResponse>('/recommend/home');

    if (!response.data.success) {
        throw new Error(response.data.message || '추천 상품 데이터를 가져오는 데 실패했습니다.');
    }

    return response.data.data;
};

export const useRecommend = () => {
    return useQuery(
        ['recommendations'],
        fetchRecommendations,
        {
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
        }
    );
};