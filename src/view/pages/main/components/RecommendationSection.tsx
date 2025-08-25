/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ProductCard } from "@view/pages/main/components/ProductCard";
import ErrorAlert from "@view/pages/error/ErrorAlert";
import { useRecommendationsSection } from "../../../../controller/feature/product/hook/useRecommendationsSection";

const sectionStyle = css`
    padding: 20px;
`;

const carouselStyle = css`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 20px;

    & > * {
        flex-shrink: 0;
    }
`;

export const RecommendationsSection = () => {
    const { recommendations, isLoading, error } = useRecommendationsSection();

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return (
            <ErrorAlert
                message={'추천 상품을 가져오는 중 오류가 발생했습니다.'} onDismiss={function (): void {
                throw new Error('Function not implemented.');
            }}            />
        );
    }

    if (!recommendations.length) {
        return <div>추천 상품이 없습니다.</div>;
    }

    return (
        <section css={sectionStyle}>
            <h2>추천 상품</h2>
            <div css={carouselStyle}>
                {recommendations.map((product) => (
                    <ProductCard
                        key={product.id}
                        manufacturerName={product.manufacturerName || ''}
                        productName={product.productName}
                        discountedPrice={product.discountedPrice || ''}
                        thumbnail={product.thumbnail}
                        liked={product.likedByMe}
                        cardSize="L" id={''}
                    />
                ))}
            </div>
        </section>
    );
};