import { useRecommend } from "../api/useRecommend";

const useRecommendationsSection = () => {
    const { data, isLoading, isError, error } = useRecommend();

    return {
        recommendations: data || [],
        isLoading,
        error: isError ? error : null,
    };
};

export { useRecommendationsSection };