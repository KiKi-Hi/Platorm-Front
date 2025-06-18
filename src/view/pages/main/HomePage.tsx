import React from 'react';
import TopBar from "@view/layout/elements/TopBar";
import GNB from "@view/layout/elements/GNB";
import CategoryChips from "./components/CategoryChips";
import {ProductCarousel, ProductGrid} from "./components/ProductCard";

const dummyProducts = new Array(5).fill(0).map((_, idx) => ({
    brand: "제조사명",
    name: `제품명 ${idx + 1}`,
    price: "00,000",
    discount: "00%",
}));

export const HomePage = () => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white">
            <TopBar />
            <CategoryChips selected="하우징" />
            <ProductCarousel products={dummyProducts} />
            <ProductGrid products={dummyProducts} />
            <GNB current="home" />
        </div>
    );
};