import { useInfiniteQuery } from 'react-query';
import { api } from '../../../api/axiosInstance';
import { ProductResponse, UseProductsParams } from '../type/products';
import {Category} from "../constant/category";

const fetchInfiniteProducts = async ({ pageParam = 1, queryKey }: any): Promise<ProductResponse> => {
  const params = queryKey[1];
  const response = await api.get('/products/list', {
    params: {
      ...params,
      page: pageParam,
    },
  });

  if (!response.data.success) {
    throw new Error(response.data.error?.message || 'Failed to fetch products');
  }

  return response.data.data;
};

export const useProductsInfiniteQuery = (params: {
  category: Category;
  manufacturer?: string;
  maxPrice?: number;
  minPrice?: number;
  size?: number
}) => {
  return useInfiniteQuery(
    ['products', params],
    fetchInfiniteProducts,
    {
      getNextPageParam: (lastPage) => {
        return lastPage.hasNext ? lastPage.page + 1 : undefined;
      },
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    }
  );
};

