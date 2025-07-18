/** @jsxImportSource @emotion/react */
import React, {useEffect, useRef} from 'react';
import {css} from '@emotion/react';
import CategoryChips from './components/CategoryChips';
import {ProductGrid} from './components/ProductCard';
import BannerSlider from './components/BannerSlider';
import {ProductCarouselSection} from "@view/pages/main/components/ProductCarouselSection";
import {useProductsInfiniteQuery} from "../../../controller/feature/product/useProduct";
import {Category} from "../../../controller/feature/product/constant/category";
import ErrorPage from '../error/ErrorPage';

const containerStyle = css`
    position: relative;
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    background-color: #ffffff;
`;

const dummyProducts = new Array(5).fill(0).map((_, idx) => ({
    brand: '제조사명',
    name: `제품명 ${idx + 1}`,
    price: '00,000',
    discount: '00%',
    size: 'L' as 'L',
}));

export function HomePage() {
    const {data, fetchNextPage, hasNextPage, isError, isLoading} = useProductsInfiniteQuery({
        size: 20,
        category: Category.KEYCAP
    });

    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            {threshold: 1.0}
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [hasNextPage, fetchNextPage]);

    const products = data?.pages.flatMap((page) => page.content) || [];

    return (
        <div css={containerStyle}>
            <BannerSlider/>
            <ProductCarouselSection products={dummyProducts} title={'추천 상품을 한눈에'}/>
            <CategoryChips selected="하우징"/>
            {isLoading ? (
                <div>로딩 중...</div>
            ) : isError ? (
                <ErrorPage/>
            ) : (
                <ProductGrid products={products} cardSize='L'/>
            )}
            <div ref={observerRef} style={{height: '1px', background: 'transparent'}}/>
        </div>
    );
}