import { useQuery } from 'react-query';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  price: number;
  // 추가적인 제품 속성 정의
}

interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  size: number;
}

interface UseProductsParams {
  page: number;
  size: number;
  category?: string;
  manufacturer?: string;
  minPrice?: number;
  maxPrice?: number;
}

const fetchProducts = async (params: UseProductsParams, token: string): Promise<ProductsResponse> => {
  const { page, size, category, manufacturer, minPrice, maxPrice } = params;

  const response = await axios.get('/api/v1/products/list', {
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
      size,
      category,
      manufacturer,
      minPrice,
      maxPrice,
    },
  });

  return response.data;
};

export const useProducts = (params: UseProductsParams, token: string) => {
  return useQuery(['products', params], () => fetchProducts(params, token), {
    staleTime: 5 * 60 * 1000, // 데이터가 5분 동안 신선하다고 간주
    cacheTime: 10 * 60 * 1000, // 캐시 데이터 유지 시간
    enabled: !!token, // 토큰이 있을 때만 호출
  });
};