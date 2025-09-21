import { useInfiniteQuery } from 'react-query';
import { api } from '../../../api/axiosInstance';
import { ProductResponse, UseProductsParams } from '../type/products';
import { Category } from '../constant/category';

const fetchInfiniteProducts = async ({ pageParam = 1, queryKey }: any): Promise<ProductResponse> => {
  const { category, manufacturer, maxPrice, minPrice } = queryKey[1];

  const response = await api.get('/products/list', {
    params: { category, manufacturer, maxPrice, minPrice, page: pageParam },
  });

  if (!response.data?.success) {
    throw new Error(response.data?.error || '상품을 불러오는데 실패했습니다.');
  }

  return response.data.data;
};

const useProductsInfiniteQuery = (params: {
  category: Category;
  manufacturer?: string;
  maxPrice?: number;
  minPrice?: number;
  size?: number;
  requestType: 'manufacturer' | 'list';
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

export { useProductsInfiniteQuery, fetchInfiniteProducts };