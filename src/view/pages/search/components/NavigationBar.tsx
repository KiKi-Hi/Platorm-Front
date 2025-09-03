/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const navStyle = css`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
    background-color: white;
    border-top: 1px solid #ddd;
`;

const navItemStyle = css`
    text-align: center;
    font-size: 12px;
    color: #636e72;
`;

const NavigationBar = () => {
    const navItems = ["홈", "검색", "설정"];

    return (
        <div css={navStyle}>
            {navItems.map((item, index) => (
                <div css={navItemStyle} key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
};

export default NavigationBar;