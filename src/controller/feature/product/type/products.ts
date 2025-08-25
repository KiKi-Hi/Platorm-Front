import {Category} from "../constant/category";

interface Product {
    id: string;
    thumbnail: string;
    category: string;
    manufacturerName: string;
    productName: string;
    discountRate: number;
    discountedPrice: string;
    likedByMe: boolean;
}

export interface ProductDetail {
    id: string;
    thumbnail: string;
    manufacturerName: string | null;
    category: string;
    productName: string;
    originalPrice: string;
    likedByMe: boolean;
    cautions: string;
    options: string[];
    imageUrl: string[];
}

interface ProductResponse {
    content: Product[];
    hasNext: boolean;
    page: number;
    size: number;
}

interface UseProductsParams {
    page: number;
    size: number;
    category: Category;
}

export { Product, ProductResponse, UseProductsParams };