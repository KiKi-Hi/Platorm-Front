/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const headerStyle = css`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background-color: #f7f7f7;
`;

const searchBoxStyle = css`
  flex: 1;
  padding: 8px 12px;
  background-color: #eef2f7;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const placeholderStyle = css`
  color: #7f8fa6;
  font-size: 14px;
`;

const iconStyle = css`
  width: 16px;
  height: 16px;
  background-color: #d1d8e0;
  border-radius: 50%;
`;

const SearchHeader = () => {
    return (
        <div css={headerStyle}>
            <div css={iconStyle}></div>
            <div css={searchBoxStyle}>
                <div css={placeholderStyle}>어떤 제품을 찾으세요?</div>
                <div css={iconStyle}></div>
            </div>
        </div>
    );
};

export default SearchHeader;