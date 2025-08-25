/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';
import {HeartIcon} from "@view/components/tokens/icon";
import {Product} from "../../../../controller/feature/product/type/products";

interface ProductCardProps {
  manufacturerName: string | null;
  productName: string;
  discountedPrice: string;
  thumbnail: string;
  liked?: boolean;
  cardSize: 'S' | 'L';
}

const cardSizeStyles = {
  S: {
    width: '112px',
    height: '96px',
  },
  L: {
    width: '160px',
    height: '144px',
  },
};

export function ProductCard({ thumbnail, manufacturerName, productName, discountedPrice, cardSize = 'L' }: ProductCardProps) {
  const theme = useTheme();
  const { width, height } = cardSizeStyles[cardSize];

  const container = css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[8]};
    width: ${width};
    flex-shrink: 0;
  `;

  const imageBox = css`
    width: ${width};
    height: ${height};
    background-color: ${theme.colors.fill.extraLight};
    border-radius: ${theme.radius.m};
    position: relative;
    overflow: hidden;
  `;

  const heartIndicator = css`
    position: absolute;
    bottom: ${theme.spacing[8]};
    right: ${theme.spacing[8]};
    width: 24px;
    height: 24px;
  `;

  const textGroup = css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  `;

  const manufacturerNameText = css`
    color: ${theme.colors.text.default0};
    font-size: 12px;
    font-weight: 600;
  `;

  const productNameText = css`
    color: ${theme.colors.text.light1};
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  const priceRow = css`
    display: flex;
    gap: ${theme.spacing[4]};
    font-size: 14px;
    font-weight: bold;
  `;

  const discountText = css`
    color: ${theme.colors.text.highlight};
  `;

  const priceText = css`
    color: ${theme.colors.text.default0};
  `;

  return (
      <div css={container}>
        <div css={imageBox}>
          <img
              src={thumbnail}
              alt={productName}
              css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
          />
          <div css={heartIndicator} >
            <HeartIcon />
          </div>
        </div>
        <div css={textGroup}>
          <div css={manufacturerNameText}>{manufacturerName}</div>
          <div css={productNameText}>{productName}</div>
          <div css={priceRow}>
            <span css={priceText}>{discountedPrice}</span>
          </div>
        </div>
      </div>
  );
}

export function ProductCarousel({ products }: { products: ProductCardProps[] }) {
  const theme = useTheme();

  const wrapper = css`
    display: flex;
    gap: ${theme.spacing[10]};
    overflow-x: auto;
    padding: ${theme.spacing[8]} ${theme.spacing[20]};
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    & > * {
      scroll-snap-align: start;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
      <div css={wrapper}>
        {products.map((product, idx) => (
            <ProductCard key={idx} {...product} cardSize="S" />
        ))}
      </div>
  );
}

export function ProductGrid({products}: { products: Product[]; cardSize: 'S' | 'L' }) {
  const theme = useTheme();

  const grid = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-columns: repeat(auto-fit, 160px);
    gap: ${theme.spacing[6]};
    padding: ${theme.spacing[8]} ${theme.spacing[20]};
    max-width: calc(160px * 5 + ${theme.spacing[6]} * 4);
    margin: 0 auto;
    justify-content: center;

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 160px);
    }

    @media (min-width: 481px) and (max-width: 768px) {
      grid-template-columns: repeat(3, 160px);
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(4, 160px);
    }

    @media (min-width: 1025px) {
      grid-template-columns: repeat(5, 160px);
    }
  `;

  return (
      <div css={grid}>
        {products.map((product, idx) => (
            <ProductCard key={idx} {...product} cardSize="L"/>
        ))}
      </div>
  );
}

