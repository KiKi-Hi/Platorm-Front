import {api} from "../../../api/axiosInstance";

export const fetchCustomKeyboardById = async ({
                                                  customKeyboardId,
                                                  category,
                                                  layout,
                                                  pageRequest,
                                              }: {
    customKeyboardId: string;
    category?: string;
    layout?: string;
    pageRequest?: number;
}) => {
    const response = await api.get(`/custom/${customKeyboardId}`, {
        params: { category, layout, pageRequest },
    });
    return response.data;
};

export const fetchCustomKeyboardProducts = async ({
                                                      category,
                                                      layout,
                                                      pageRequest,
                                                  }: {
    category?: string;
    layout?: string;
    pageRequest?: number;
}) => {
    const response = await api.get('/custom/products', {
        params: { category, layout, pageRequest },
    });
    return response.data;
};

export const fetchMyCustomKeyboards = async () => {
    const response = await api.get('/custom/myCustoms');
    return response.data;
};

export const fetchCustomKeyboardLayouts = async () => {
    const response = await api.get('/custom/layout');
    return response.data;
};