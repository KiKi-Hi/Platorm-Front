import { useQuery } from "react-query";
import axios from "axios";

const fetchProductDetail = async (id: string) => {
    const response = await axios.get(`https://api.kikihi.store/api/v1/products?id=${id}`, {
        headers: { accept: "*/*" }
    });

    if (!response.data.success) {
        throw new Error("API 요청 실패");
    }
    return response.data.data;
};

export const useProductDetail = (id: string) => {
    return useQuery(["productDetail", id], () => fetchProductDetail(id), {
        enabled: !!id
    });
};