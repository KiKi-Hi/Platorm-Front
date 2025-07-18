/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Logo from '@assets/img/logo/logo.svg';
import BtnSocialLogin from './components/BtnSocialLogin';
import { googleLogin, kakaoLogin } from '../../../controller/feature/auth/authApi';

function LoginPage() {
    const pageStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  `;

    const logoContainerStyle = css`
    flex: 1;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

    const buttonGroupStyle = css`
    position: absolute;
    bottom: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    padding: 0 24px;
  `;

    return (
        <div css={pageStyle}>
            <div css={logoContainerStyle}>
                <Logo />
            </div>
            <div css={buttonGroupStyle}>
                <BtnSocialLogin type="kakao" onClick={kakaoLogin} />
                <BtnSocialLogin type="google" onClick={googleLogin} />
            </div>
        </div>
    );
}

export default LoginPage;