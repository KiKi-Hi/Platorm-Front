/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';

const categories = [
  { name: '하우징', image: 'House.png' },
  { name: '스위치', image: 'Switch.png' },
  { name: '키캡', image: 'Keycap.png' },
  { name: '악세서리', image: 'Accessories.png' },
  { name: '케이스', image: 'Case.png' },
];

function CategoryChips({ selected }: { selected: string }) {
  const theme = useTheme();

  const containerStyle = css`
    display: flex;
    gap: ${theme.spacing[10]};
    padding: ${theme.spacing[16]} ${theme.spacing[20]};
    justify-content: space-evenly;
  `;

  const chipStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const imageStyle = css`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
  `;

  const textStyle = (isSelected: boolean) => css`
    margin-top: ${theme.spacing[6]};
    font-size: 14px; /* text-sm */
    font-weight: 500; /* font-medium */
    color: ${isSelected ? theme.colors.text.black : theme.colors.text.extraLight15};
    text-align: center;
  `;

  return (
      <div css={containerStyle}>
        {categories.map((cat) => (
            <div key={cat.name} css={chipStyle}>
              <img
                  css={imageStyle}
                  src={`/assets/img/category/${cat.image}`}
                  alt={cat.name}
              />
              <div css={textStyle(selected === cat.name)}>{cat.name}</div>
            </div>
        ))}
      </div>
  );
}

export default CategoryChips;