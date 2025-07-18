/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';
import {HeartIcon} from "@view/components/tokens/icon";
import {Product} from "../../../../controller/feature/product/type/products";

interface ProductCardProps {
  manufacturerName: string;
  productName: string;
  discountedPrice: number;
  discountRate: number;
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

export function ProductCard({ manufacturerName, productName, discountedPrice, discountRate, cardSize = 'L' }: ProductCardProps) {
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
          <div css={heartIndicator} >
            <HeartIcon />
          </div>
        </div>
        <div css={textGroup}>
          <div css={manufacturerNameText}>{manufacturerName}</div>
          <div css={productNameText}>{productName}</div>
          <div css={priceRow}>
            <span css={discountText}>{discountRate}</span>
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

export function ProductGrid({ products }: { products: Product[]; cardSize: 'S' | 'L' }) {
  const theme = useTheme();

  const grid = css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing[6]};
    padding: ${theme.spacing[8]} ${theme.spacing[20]};
  `;

  return (
      <div css={grid}>
        {products.map((product, idx) => (
            <ProductCard key={idx} {...product} cardSize="L" />
        ))}
      </div>
  );
}

