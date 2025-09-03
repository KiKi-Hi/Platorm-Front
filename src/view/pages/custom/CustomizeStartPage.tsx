/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';

const CustomizeStartPage = () => {
  const theme = useTheme();

  const containerStyles = css`
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `;

  const headerStyles = css`
    align-self: stretch;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
  `;

  const backIcon = css`
    width: 22px;
    height: 22px;
    position: relative;
  `;

  const rightIcons = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.spacing[4]};
  `;

  const bannerStyles = css`
    align-self: stretch;
    height: 272px;
    background: ${theme.colors.fill.extraLight};
    position: relative;
    overflow: hidden;
  `;

  const categoriesStyles = css`
    align-self: stretch;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.line.light1};
  `;

  const categoryItemStyles = (selected: boolean) => css`
    flex: 1 1 0;
    padding: 10px 20px;
    background: ${selected ? theme.colors.fill.white : 'inherit'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${selected ? `2px solid ${theme.colors.line.highlight}` : 'none'};
    color: ${selected ? theme.colors.text.default0 : theme.colors.text.extraLight15};
    font-size: 14px;
    font-weight: ${selected ? 600 : 400};
  `;

  const filterBarStyles = css`
    align-self: stretch;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.fill.white};
  `;

  const filterOptions = css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing[4]};
  `;

  const priceFilter = css`
    padding: 2px 10px;
    background: ${theme.colors.fill.extraLight};
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: ${theme.spacing[2]};
    outline: 1px solid ${theme.colors.line.default0};
    color: ${theme.colors.text.light1};
    font-size: 14px;
    font-weight: 500;
  `;

  const productGridStyles = css`
    align-self: stretch;
    padding: 8px 20px;
    display: flex;
    gap: ${theme.spacing[4]};
    flex-wrap: wrap;
  `;

  const productCardStyles = css`
    width: 107px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  `;

  const productThumbnailStyles = css`
    width: 107px;
    height: 96px;
    overflow: hidden;
    border-radius: ${theme.radius.s};
    background: ${theme.colors.fill.extraLight};
    position: relative;
  `;

  const productInfoStyles = css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  `;

  const products = useMemo(
      () => [
        { manufacturerName: '제조사명', productName: '제품명이 들어갑니다 뒤에는 안보이게 처리', price: '00,000' },
        { manufacturerName: '제조사명', productName: '제품명이 들어갑니다 뒤에는 안보이게 처리', price: '00,000' },
        { manufacturerName: '제조사명', productName: '제품명이 들어갑니다 뒤에는 안보이게 처리', price: '00,000' },
        { manufacturerName: '제조사명', productName: '제품명이 들어갑니다 뒤에는 안보이게 처리', price: '00,000' },
      ],
      []
  );

  return (
      <div css={containerStyles}>
        {/* Header */}
        <div css={headerStyles}>
          <div css={backIcon}></div>
          <div css={rightIcons}>
            <div css={backIcon}></div>
            <div css={backIcon}></div>
          </div>
        </div>

        <div css={bannerStyles}></div>

        <div css={categoriesStyles}>
          <div css={categoryItemStyles(true)}>하우징</div>
          <div css={categoryItemStyles(false)}>스위치</div>
          <div css={categoryItemStyles(false)}>키캡</div>
          <div css={categoryItemStyles(false)}>악세서리</div>
        </div>

        <div css={filterBarStyles}>
          <div css={filterOptions}>
            <div>전체</div>
            <div>000</div>
            <div css={priceFilter}>가격대</div>
          </div>
        </div>

        <div css={productGridStyles}>
          {products.map((product, index) => (
              <div key={index} css={productCardStyles}>
                <div css={productThumbnailStyles}></div>
                <div css={productInfoStyles}>
                  <div>{product.manufacturerName}</div>
                  <div>{product.productName}</div>
                  <div>{product.price}</div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export {CustomizeStartPage};