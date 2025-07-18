/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import TopBar from '@view/layout/elements/TopBar';
import GNB from '@view/layout/elements/GNB';
import CategoryChips from './components/CategoryChips';
import { ProductGrid } from './components/ProductCard';
import BannerSlider from './components/BannerSlider';
import {ProductCarouselSection} from "@view/pages/main/components/ProductCarouselSection";

const containerStyle = css`
    position: relative;
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    max-width: 640px;
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
    return (
        <div css={containerStyle}>
            <TopBar />
            <BannerSlider />
            <ProductCarouselSection products={dummyProducts} title={'추천 상품을 한눈에'} />
            <CategoryChips selected="하우징" />
            <ProductGrid products={dummyProducts} />
            <GNB current="home" />
        </div>
    );
}