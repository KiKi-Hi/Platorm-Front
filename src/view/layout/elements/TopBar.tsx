/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import TopLogo from "@assets/img/logo/topbar-logo.svg";
import SearchIcon from "@assets/icons/menu/search.svg";
import CartIcon from "@assets/icons/menu/cart.svg";
import MenuIcon from "@assets/icons/menu/menu.svg";
import { Sidebar } from "./Sidebar";

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
                    <TopLogo />
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