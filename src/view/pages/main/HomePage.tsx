import React from 'react';
import TopBar from '@view/layout/elements/TopBar';
import GNB from '@view/layout/elements/GNB';
import CategoryChips from './components/CategoryChips';
import { ProductCarousel, ProductGrid } from './components/ProductCard';
import BannerSlider from './components/BannerSlider';

const dummyProducts = new Array(5).fill(0).map((_, idx) => ({
  brand: '제조사명',
  name: `제품명 ${idx + 1}`,
  price: '00,000',
  discount: '00%',
}));

export function HomePage() {
  return (
    <div className="relative mx-auto h-screen w-full max-w-sm bg-white">
      <TopBar />
      <BannerSlider />
      <ProductGrid products={dummyProducts} />
      <CategoryChips selected="하우징" />
      <ProductCarousel products={dummyProducts} />
      <GNB current="home" />
    </div>
  );
}
