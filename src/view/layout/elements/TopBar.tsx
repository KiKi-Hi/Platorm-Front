/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';
import TopLogo from '@assets/img/logo/topbar-logo.svg';
import SearchIcon from '@assets/icon/menu/search.svg';
import CartIcon from '@assets/icon/menu/cart.svg';
import MenuIcon from '@assets/icon/menu/menu.svg';

const containerStyle = css`
  position: sticky;
  top: 0;
  left: 0;
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const logoWrapperStyle = css`
  position: relative;
  height: 1.25rem; /* 5 * 0.25rem */
  width: 5rem;     /* 20 * 0.25rem */
`;

const iconGroupStyle = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem; /* 4 * 0.25rem */
`;

const iconWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem; /* 2.5 * 0.25rem */
`;

const iconStyle = css`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
`;

function TopBar() {
    return (
        <div css={containerStyle}>
            <div css={logoWrapperStyle}>
                <TopLogo />
            </div>
            <div css={iconGroupStyle}>
                <div data-role="Default" data-size="L" css={iconWrapperStyle}>
                    <div css={iconStyle}>
                        <SearchIcon />
                    </div>
                </div>
                <div data-role="Default" data-size="L" css={iconWrapperStyle}>
                    <div css={iconStyle}>
                        <CartIcon />
                    </div>
                </div>
                <div data-role="Default" data-size="L" css={iconWrapperStyle}>
                    <div css={iconStyle}>
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
