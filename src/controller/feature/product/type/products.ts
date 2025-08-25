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