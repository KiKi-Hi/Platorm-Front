/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const gridContainerStyle = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
    background-color: white;
`;

const productCardStyle = css`
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 8px;
`;

const ProductGridSection = () => {
    const products = Array(6).fill({
        name: "제품명",
        price: "00,000원",
        discount: "00%",
    });

    return (
        <div css={gridContainerStyle}>
            {products.map((product, index) => (
                <div key={index} css={productCardStyle}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.discount}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductGridSection;