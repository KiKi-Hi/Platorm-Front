import {api} from "../../../api/axiosInstance";

export const getBookmarks = async (category: string, pageRequest: any) => {
    return await api.get('/api/v1/bookmarks', {
        params: {
            category,
            pageRequest
        }
    });
};

export const addBookmark = async (productId: string) => {
    return await api.post('/api/v1/bookmarks', {
        productId
    });
};

export const deleteBookmarks = async (ids: string[]) => {
    return await api.delete('/api/v1/bookmarks', {
        params: {
            ids
        }
    });
};

export const syncBookmarks = async (productIds: string[]) => {
    return await api.post('/api/v1/bookmarks/sync', {
        productIds
    });
};