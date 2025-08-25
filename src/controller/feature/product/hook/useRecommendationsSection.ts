import { useRecommend } from "../api/useRecommend";

export const useRecommendationsSection = () => {
    const { data, isLoading, isError, error } = useRecommend();

    return {
        recommendations: data || [],
        isLoading,
        error: isError ? error : null,
    };
};