/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Sidebar } from "./Sidebar";
import {useLocation} from "react-router-dom";

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
                    {isProductPage ?
                        (<img src="/assets/icons/menu/back.svg" alt='back'/>) :
                        (<img src="/assets/img/logo/topbar-logo.svg" alt='logo'/>)
                    }
                </div>
                <div css={iconGroupStyle}>
                    <div css={iconStyle}>
                        <img src="/assets/icons/menu/search.svg" alt='search'/>
                    </div>
                    <div css={iconStyle} onClick={handleMenuClick}>
                        <img src="/assets/icons/menu/menu.svg" alt='menu'/>
                    </div>
                </div>
            </div>
            <Sidebar isVisible={isSidebarVisible} onClose={handleCloseSidebar} />
        </>
    );
}

export default TopBar;