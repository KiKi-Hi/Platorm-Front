/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';

const CustomizeInfoPage = () => {
  const theme = useTheme();

  const containerStyles = css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing[20]} ${theme.spacing[20]} ${theme.spacing[24]};
    gap: ${theme.spacing[8]};
    width: 100%;
  `;

  const sectionStyles = css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
    width: 100%;
  `;

  const titleWrapperStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const titleStyles = css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing[4]};
  `;

  const assistiveIconStyles = css`
    width: 18px;
    height: 18px;
    border: 1.6px solid ${theme.colors.icon.extraLight15};
    border-radius: 50%;
  `;

  const subtitleStyles = css`
    color: ${theme.colors.text.light1};
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  `;

  const dividerStyles = css`
    flex: 1 1 0;
    height: 0px;
    border-top: 1px solid ${theme.colors.line.default0};
  `;

  const cardContainerStyles = css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[8]};
    width: 100%;
  `;

  const cardStyles = css`
    display: flex;
    gap: ${theme.spacing[12]};
    padding: ${theme.spacing[12]};
    background: ${theme.colors.fill.extraLight50};
    border-radius: ${theme.radius.m};
    align-items: center;
    width: 100%;
  `;

  const cardImageWrapperStyles = css`
    width: 90px;
    height: 70px;
    border-radius: ${theme.radius.s};
    overflow: hidden;
    background: ${theme.colors.fill.extraLight};
    position: relative;
  `;

  const cardContentStyles = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
  `;

  const cardTitleStyles = css`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${theme.colors.text.default0};
  `;

  const cardDescriptionStyles = css`
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: ${theme.colors.text.light1};
  `;

  const priceSectionStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const quantityWrapperStyles = css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing[8]};
  `;

  const quantityButtonStyles = css`
    width: 24px;
    height: 24px;
    border: 1.6px solid ${theme.colors.icon.default0};
    border-radius: ${theme.radius.s};
  `;

  const priceTextStyles = css`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${theme.colors.text.default0};
  `;

  return (
      <div css={containerStyles}>
        <div css={sectionStyles}>
          <div css={titleWrapperStyles}>
            <div css={titleStyles}>
              <div css={css`font-size: 14px; font-weight: 700; line-height: 21px; color: ${theme.colors.text.default0}`}>
                키보드 제목이 들어갑니다
              </div>
              <div css={assistiveIconStyles}></div>
            </div>
            <div css={assistiveIconStyles}></div>
          </div>
          <div css={subtitleStyles}>
            키보드 타입
            <div css={css`display: flex; gap: ${theme.spacing[4]};`}>
              <span>하우징 제품명</span>
              <span>|</span>
              <span>스위치 제품명</span>
              <span>|</span>
              <span>키캡 제품명</span>
            </div>
          </div>
        </div>
        <div css={cardContainerStyles}>
          <div css={cardStyles}>
            <div css={cardImageWrapperStyles}></div>
            <div css={cardContentStyles}>
              <div css={cardTitleStyles}>선택된 부품이 없어요!</div>
              <div css={cardDescriptionStyles}>선택하여 부품 추가하기</div>
            </div>
          </div>
          <div css={cardStyles}>
            <div css={cardImageWrapperStyles}></div>
            <div css={cardContentStyles}>
              <div css={cardTitleStyles}>제조사명</div>
              <div css={cardDescriptionStyles}>제품명이 들어갑니다 두줄 이상도 커버 가능합니다</div>
              <div css={priceSectionStyles}>
                <div css={quantityWrapperStyles}>
                  <div css={quantityButtonStyles}></div>
                  <div css={css`
                  height: 30px;
                  padding: ${theme.spacing[8]} ${theme.spacing[12]};
                  background: ${theme.colors.fill.white};
                  border-radius: ${theme.radius.s};
                  border: 1px solid ${theme.colors.line.light1};
                `}>
                    1
                  </div>
                  <div css={quantityButtonStyles}></div>
                </div>
                <div css={priceTextStyles}>000,000 원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export {CustomizeInfoPage};