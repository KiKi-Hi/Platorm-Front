/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { ReactComponent as TopLogo } from "@assets/img/logo/topbar-logo.svg";
import { ReactComponent as SearchIcon }from "@assets/icons/menu/search.svg";
import { ReactComponent as CartIcon } from "@assets/icons/menu/cart.svg";
import { ReactComponent as MenuIcon } from "@assets/icons/menu/menu.svg";
import { Sidebar } from "./Sidebar";
import {useLocation} from "react-router-dom";

const ProductLogo = () => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_2013_4714)">
            <path
                d="M1 10.6667H21.5M1 10.6667L7.66667 17.3333M1 10.6667L7.66667 4"
                stroke="#323237"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <clipPath id="clip0_2013_4714">
                <rect width="22" height="22" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const containerStyle = css`
    position: sticky;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #ffffff;
    z-index: 1002;
`;

const logoWrapperStyle = css`
    position: relative;
    height: 1.25rem;
    width: 5rem;
`;

const iconGroupStyle = css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
`;

const iconStyle = css`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    cursor: pointer;
`;

function TopBar() {
    const location = useLocation();
    const isProductPage = location.pathname.includes("product");

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const handleMenuClick = () => {
        setSidebarVisible(true);
    };

    const handleCloseSidebar = () => {
        setSidebarVisible(false);
    };

    return (
        <>
            <div css={containerStyle}>
                <div css={logoWrapperStyle}>
                    {isProductPage ? <ProductLogo /> : <TopLogo />}
                </div>
                <div css={iconGroupStyle}>
                    <div css={iconStyle}>
                        <SearchIcon />
                    </div>
                    <div css={iconStyle}>
                        <CartIcon />
                    </div>
                    <div css={iconStyle} onClick={handleMenuClick}>
                        <MenuIcon />
                    </div>
                </div>
            </div>
            <Sidebar isVisible={isSidebarVisible} onClose={handleCloseSidebar} />
        </>
    );
}

export default TopBar;