import React from 'react'

interface ProductCardProps {
    brand: string;
    name: string;
    price: string;
    discount: string;
    size?: 'S' | 'L';
}

export const ProductCard = ({ brand, name, price, discount, size = 'L' }: ProductCardProps) => {
    const width = size === 'S' ? 'w-28' : 'w-40';
    const height = size === 'S' ? 'h-24' : 'h-36';
    return (
        <div className={`${width} flex flex-col gap-2`}>
            <div className={`${width} ${height} bg-Fill-ExtraLight rounded relative`}>
                <div className="absolute right-2 bottom-2 w-6 h-6 bg-white shadow rounded-full" />
            </div>
            <div className="flex flex-col gap-0.5">
                <div className="text-xs font-semibold text-Text-Default-0">{brand}</div>
                <div className="text-xs text-Text-Light-1 truncate">{name}</div>
                <div className="flex gap-1 text-sm font-bold">
                    <span className="text-Text-Highlight">{discount}</span>
                    <span className="text-Text-Default-0">{price}</span>
                </div>
            </div>
        </div>
    );
};

export const ProductCarousel = ({ products }: { products: ProductCardProps[] }) => (
    <div className="flex gap-2.5 overflow-x-auto px-5 py-2">
        {products.map((product, idx) => (
            <ProductCard key={idx} {...product} size="S" />
        ))}
    </div>
);

export const ProductGrid = ({ products }: { products: ProductCardProps[] }) => (
    <div className="flex flex-wrap gap-1.5 px-5 py-2">
        {products.map((product, idx) => (
            <ProductCard key={idx} {...product} size="L" />
        ))}
    </div>
);