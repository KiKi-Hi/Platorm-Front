import React from 'react';

interface ProductCardProps {
  brand: string;
  name: string;
  price: string;
  discount: string;
  size?: 'S' | 'L';
}

export function ProductCard({ brand, name, price, discount, size = 'L' }: ProductCardProps) {
  const width = size === 'S' ? 'w-28' : 'w-40';
  const height = size === 'S' ? 'h-24' : 'h-36';
  return (
    <div className={`${width} flex flex-col gap-2`}>
      <div className={`${width} ${height} bg-Fill-ExtraLight relative rounded`}>
        <div className="absolute bottom-2 right-2 size-6 rounded-full bg-white shadow" />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="text-Text-Default-0 text-xs font-semibold">{brand}</div>
        <div className="text-Text-Light-1 truncate text-xs">{name}</div>
        <div className="flex gap-1 text-sm font-bold">
          <span className="text-Text-Highlight">{discount}</span>
          <span className="text-Text-Default-0">{price}</span>
        </div>
      </div>
    </div>
  );
}

export function ProductCarousel({ products }: { products: ProductCardProps[] }) {
  return (
    <div className="flex gap-2.5 overflow-x-auto px-5 py-2">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} size="S" />
      ))}
    </div>
  );
}

export function ProductGrid({ products }: { products: ProductCardProps[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 px-5 py-2">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} size="L" />
      ))}
    </div>
  );
}
