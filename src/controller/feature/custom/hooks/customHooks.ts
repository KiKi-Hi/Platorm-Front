import { useQuery, useInfiniteQuery } from 'react-query';
import {
    fetchCustomKeyboardById,
    fetchCustomKeyboardProducts,
    fetchMyCustomKeyboards,
    fetchCustomKeyboardLayouts,
} from '../api/customApi';

export const useCustomKeyboardById = ({
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
    return useQuery(
        ['customKeyboard', customKeyboardId, category, layout, pageRequest],
        () => fetchCustomKeyboardById({ customKeyboardId, category, layout, pageRequest })
    );
};

export const useCustomKeyboardProducts = ({
                                              category,
                                              layout,
                                              pageRequest,
                                          }: {
    category?: string;
    layout?: string;
    pageRequest?: number;
}) => {
    return useInfiniteQuery(
        ['customProducts', category, layout],
        ({ pageParam = pageRequest }) => fetchCustomKeyboardProducts({ category, layout, pageRequest: pageParam }),
        {
            getNextPageParam: (lastPage) => lastPage.nextPage || undefined,
        }
    );
};

export const useMyCustomKeyboards = () => {
    return useQuery('myCustomKeyboards', fetchMyCustomKeyboards);
};

export const useCustomKeyboardLayouts = () => {
    return useQuery('customKeyboardLayouts', fetchCustomKeyboardLayouts);
};