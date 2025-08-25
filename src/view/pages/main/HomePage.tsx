/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import CategoryChips from './components/CategoryChips';
import { ProductGrid } from './components/ProductCard';
import BannerSlider from './components/BannerSlider';
import { useProductsInfiniteQuery } from "../../../controller/feature/product/api/useProduct";
import { Category } from "../../../controller/feature/product/constant/category";
import ErrorAlert from '../error/ErrorAlert';
import {RecommendationsSection} from "@view/pages/main/components/RecommendationSection";

const containerStyle = css`
    position: relative;
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    background-color: #ffffff;
`;

export const HomePage = () => {
    const { data, fetchNextPage, hasNextPage, isError, isLoading } = useProductsInfiniteQuery({
        size: 20,
        category: Category.KEYCAP,
    });

    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [hasNextPage, fetchNextPage]);

    const products = data?.pages.flatMap((page) => page.content) || [];

    return (
        <div css={containerStyle}>
            <BannerSlider />
            <RecommendationsSection />
            <CategoryChips selected="하우징" />
            {isLoading ? (
                <div>로딩 중...</div>
            ) : isError ? (
                <ErrorAlert message="데이터를 불러오는데 실패했습니다." onDismiss={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            ) : (
                <ProductGrid products={products} cardSize="L" />
            )}
            <div ref={observerRef} style={{ height: '1px', background: 'transparent' }} />
        </div>
    );
};