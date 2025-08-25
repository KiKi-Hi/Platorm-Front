/** @jsxImportSource @emotion/react */
import { Screen } from "@view/components/common"
import ProductHeader from "@view/pages/product/components/sections/ProductHeader";
import ImageCarousel from "@view/pages/product/components/sections/ImageCarousel";
import SimilarProducts from "@view/pages/product/components/sections/SimilarProduct";
import NoticeSection from "@view/pages/product/components/sections/NoticeSection";
import {useParams} from "react-router-dom";
import {useProductDetail} from "../../../controller/feature/product/api/useProductDetail";

export default function DetailPage() {
    const { id } = useParams();
    const {data: product, isLoading, isError} = useProductDetail(id || "");

    if (isLoading) {
        return <Screen>로딩 중...</Screen>;
    }

    if (isError || !product) {
        return <Screen>상품 정보를 가져오는 데 실패했습니다.</Screen>;
    }

    return (
        <Screen>
            <ImageCarousel images={product.thumbnail} />
            <ProductHeader
                maker={product.manufacturerName || "알 수 없음"}
                title={product.productName}
                price={product.originalPrice} liked={false}            />
            <SimilarProducts productId={id || ""} />
            <NoticeSection caution={product.cautions} />
            <div style={{ height: 80 }} />
        </Screen>

    );
}