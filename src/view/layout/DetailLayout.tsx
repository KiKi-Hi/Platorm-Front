/** @jsxImportSource @emotion/react */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { css, useTheme } from '@emotion/react';
import TopBar from './elements/TopBar';
import {useDispatch} from "react-redux";
import { clearError } from 'controller/feature/error/store/errorSlice';
import ErrorAlert from "@view/pages/error/ErrorAlert";
import {useAppSelector} from "@app/store/hook";
import BottomAction from "@view/pages/product/components/sections/BottomAction";

const BaseLayout = () => {
    const theme = useTheme();
    const location = useLocation();
    const dispatch = useDispatch();
    const { hasError, errorMessage } = useAppSelector((state) => state.error);
    const isLoginPage = location.pathname === '/login';

    const dismissError = () => {
        dispatch(clearError());
    };


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
  `;

    return (
        <div css={outerStyle}>
            <div css={innerStyle}>
                {hasError && <ErrorAlert message={errorMessage} onDismiss={dismissError} />}
                <TopBar />
                <Outlet/>
                <BottomAction/>
            </div>
        </div>
    );
}

export default BaseLayout;