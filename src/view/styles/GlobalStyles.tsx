/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => {
    const theme = useTheme();

    return (
        <Global
            styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background-color: ${theme.colors.fill.white};
          color: ${theme.colors.text.default0};
          font-family: 'Pretendard', sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        img {
          max-width: 100%;
          display: block;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          all: unset;
          cursor: pointer;
            text-align: center;
        }

        ul,
        ol {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}
        />
    );
};

export default GlobalStyles;
