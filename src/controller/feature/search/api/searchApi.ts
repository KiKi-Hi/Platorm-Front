import {api} from "../../../api/axiosInstance";

export interface SearchParams {
    keyword?: string;
    page?: number;
    size?: number;
    minScore?: number;
    pageRequest?: string;
}

export const getSearchResults = async (params: SearchParams) => {
    return await api.get('/api/v1/search', {params});
};

export const deleteSearchHistory = async () => {
    return await api.delete('/api/v1/search');
};

export const getMySearchHistory = async () => {
    return await api.get('/api/v1/search/my');
};