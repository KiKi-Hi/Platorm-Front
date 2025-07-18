/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';
import { ProductCard } from './ProductCard';

interface ProductCardProps {
    brand: string;
    name: string;
    price: string;
    discount: string;
    size?: 'S' | 'L';
}

interface ProductCarouselSectionProps {
    title: string;
    subtitle?: string;
    products: ProductCardProps[];
    onMoreClick?: () => void;
}

export function ProductCarouselSection({
                                           title,
                                           subtitle,
                                           products,
                                           onMoreClick,
                                       }: ProductCarouselSectionProps) {
    const theme = useTheme();

    const sectionStyle = css`
    padding: ${theme.spacing[12]} ${theme.spacing[20]};
  `;

    const headerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: ${theme.spacing[4]};
  `;

    const titleGroupStyle = css`
    display: flex;
    flex-direction: column;
  `;

    const titleStyle = css`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.text.default0};
  `;

    const subtitleStyle = css`
    font-size: 13px;
    color: ${theme.colors.text.light1};
    margin-top: 2px;
  `;

    const moreButtonStyle = css`
    font-size: 14px;
    color: ${theme.colors.text.light1};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;

    &:after {
      content: '›';
      font-size: 16px;
    }
  `;

    const carouselStyle = css`
    display: flex;
    gap: ${theme.spacing[10]};
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: ${theme.spacing[4]};

    & > * {
      scroll-snap-align: start;
      flex-shrink: 0;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  `;

    return (
        <section css={sectionStyle}>
            <div css={headerStyle}>
                <div css={titleGroupStyle}>
                    <div css={titleStyle}>{title}</div>
                    {subtitle && <div css={subtitleStyle}>{subtitle}</div>}
                </div>
                {onMoreClick && (
                    <div css={moreButtonStyle} onClick={onMoreClick}>
                        전체보기
                    </div>
                )}
            </div>

            <div css={carouselStyle}>
                {products.map((product, idx) => (
                    <ProductCard key={idx} {...product} size="S" />
                ))}
            </div>
        </section>
    );
}
