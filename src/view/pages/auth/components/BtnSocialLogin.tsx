/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as KakaoIcon }from '@assets/icons/brand/kakao.svg';
import { ReactComponent as GoogleIcon } from '@assets/icons/brand/google.svg';

interface SocialLoginButtonProps {
  type: 'kakao' | 'google';
  onClick?: () => void;
}

const BtnSocialLogin: React.FC<SocialLoginButtonProps> = ({ type, onClick }) => {
  const isKakao = type === 'kakao';
  const label = isKakao ? '카카오로 로그인' : '구글로 로그인';

  const buttonStyle = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 335px;
    border-radius: 9999px;
    background-color: ${isKakao ? '#FEE500' : '#FFFFFF'};
    color: #000000;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  `;

  const iconStyle = css`
    position: absolute;
    left: 24px;
    width: 20px;
    height: 20px;
  `;

  return (
      <button css={buttonStyle} onClick={onClick} aria-label={label}>
        <div css={iconStyle}>
          {isKakao ? (<img src="/assets/icons/brand/kakao.svg" alt='kakao'/>) : (<img src="/assets/icons/brand/google.svg" alt='google'/>)}
        </div>
        {label}
      </button>
  );
};

export default BtnSocialLogin;
