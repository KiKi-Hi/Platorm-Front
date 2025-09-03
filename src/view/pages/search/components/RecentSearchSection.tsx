/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sectionStyle = css`
  padding: 16px;
  background-color: white;
`;

const titleStyle = css`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const chipContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const chipStyle = css`
  background-color: #6c5ce7; /* Main color */
  color: white;
  border-radius: 25px;
  padding: 4px 12px;
  font-size: 14px;
`;

const RecentSearchSection = () => {
    return (
        <div css={sectionStyle}>
            <div css={titleStyle}>최근 검색어</div>
            <div css={chipContainerStyle}>
                {["칩내용", "칩내용", "칩내용"].map((chip, index) => (
                    <div css={chipStyle} key={index}>
                        {chip}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentSearchSection;