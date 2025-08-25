/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';
import {Category} from "../../../../controller/feature/product/constant/category";

const categories: { name: Category, label: string, image: string }[] = [
  {name: Category.HOUSING, label: '하우징', image: 'House.png'},
  {name: Category.SWITCH, label: '스위치', image: 'Switch.png'},
  {name: Category.KEYCAP, label: '키캡', image: 'Keycap.png'},
  {name: Category.ACCESSORIES, label: '악세서리', image: 'Accessories.png'},
  {name: Category.CASE, label: '케이스', image: 'Case.png'},
  {name: Category.KEYBOARD, label: '키보드', image: 'Keyboard.png'},
];

function CategoryChips({
                         selected,
                         onChange
                       }: {
  selected: string;
  onChange: (category: string) => void;
}) {
  const theme = useTheme();

  const containerStyle = css`
    display: flex;
    gap: ${theme.spacing[10]};
    padding: ${theme.spacing[16]} ${theme.spacing[20]};
    justify-content: space-evenly;
    z-index: 1003;
    position: relative;
  `;

  const chipStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  `;

  const imageStyle = css`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
  `;

  const textStyle = (isSelected: boolean) => css`
    margin-top: ${theme.spacing[6]};
    font-size: 14px;
    font-weight: 500;
    color: ${isSelected ? theme.colors.text.black : theme.colors.text.extraLight15};
    text-align: center;
  `;

  const handleClick = (categoryName: string) => {
    if (onChange) {
      onChange(categoryName);
    }
  };

  return (
      <div css={containerStyle}>
        {categories.map((cat) => (
            <div
                key={cat.label}
                css={chipStyle}
                onClick={() => handleClick(cat.name)}
            >
              <img
                  css={imageStyle}
                  src={`/assets/img/category/${cat.image}`}
                  alt={cat.label}
              />
              <div css={textStyle(selected === cat.label)}>{cat.label}</div>
            </div>
        ))}
      </div>
  );
}

export default CategoryChips;