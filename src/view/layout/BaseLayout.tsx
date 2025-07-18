/** @jsxImportSource @emotion/react */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';

function BaseLayout() {
    const theme = useTheme();
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    const outerStyle = css`
    min-height: 100vh;
    background-color: ${isLoginPage ? '#333237' : theme.colors.fill.white};
  `;

    const innerStyle = css`
    min-height: 100vh;
    width: 100%;
    max-width: ${theme.screens.xl};
    margin: 0 auto;
    background-color: ${!isLoginPage ? theme.colors.fill.white : 'transparent'};
    ${!isLoginPage &&
    `
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    `}
  `;

    return (
        <div css={outerStyle}>
            <div css={innerStyle}>
                <Outlet />
            </div>
        </div>
    );
}

export default BaseLayout;