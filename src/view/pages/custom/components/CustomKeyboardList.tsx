/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';

interface CustomKeyboardProps {
    name: string;
    keyboardType: string;
    components: string[];
    price: string;
    imageUrl: string;
}

const CustomKeyboardList = ({ keyboards }: { keyboards: CustomKeyboardProps[] }) => {
    const theme = useTheme();

    const listWrapper = css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
    width: 100%;
    padding: ${theme.spacing[20]};
  `;

    const keyboardCard = css`
    width: 334px;
    padding: ${theme.spacing[10]} ${theme.spacing[8]};
    background: ${theme.colors.bg.white};
    border-bottom: 1px solid ${theme.colors.line.light1};
    display: flex;
    align-items: flex-end;
  `;

    const keyboardImageWrapper = css`
    width: 90px;
    height: 90px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${theme.colors.line.light1};
  `;

    const contentWrapper = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[6]};
  `;

    const titleRow = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

    const keyboardTitle = css`
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.text.default0};
  `;

    const assistiveIcon = css`
    width: 18px;
    height: 18px;
    border: 1.6px solid ${theme.colors.icon.extraLight15};
    border-radius: 50%;
  `;

    const componentText = css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing[2]};
    font-size: 12px;
    font-weight: 400;
    color: ${theme.colors.text.light1};
  `;

    const priceRow = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

    const priceText = css`
    font-size: 12px;
    font-weight: 600;
    color: ${theme.colors.text.default0};
  `;

    const checkButton = css`
    font-size: 12px;
    font-weight: 600;
    color: ${theme.colors.text.highlight};
  `;

    return (
        <div css={listWrapper}>
            {keyboards.map((keyboard, idx) => (
                <div css={keyboardCard} key={idx}>
                    <div css={keyboardImageWrapper}>
                        <img
                            src={keyboard.imageUrl}
                            alt={keyboard.name}
                            css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
                        />
                    </div>
                    <div css={contentWrapper}>
                        <div css={titleRow}>
                            <div css={keyboardTitle}>{keyboard.name}</div>
                            <div css={assistiveIcon}></div>
                        </div>
                        <div>
                            <div>{keyboard.keyboardType}</div>
                            <div css={componentText}>
                                {keyboard.components.map((component, index) => (
                                    <span key={index}>
                    {component}
                                        {index < keyboard.components.length - 1 && '|'}
                  </span>
                                ))}
                            </div>
                        </div>
                        <div css={priceRow}>
                            <div>
                                <span css={priceText}>{keyboard.price}</span>
                                <span css={priceText}>원</span>
                            </div>
                            <div css={checkButton}>확인하기</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomKeyboardList;