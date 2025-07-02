import React from 'react';
import KakaoIcon from '@assets/icon/brand/kakao.svg';
import GoogleIcon from '@assets/icon/brand/google.svg';

interface SocialLoginButtonProps {
  type: 'kakao' | 'google';
  onClick?: () => void;
}

const BtnSocialLogin: React.FC<SocialLoginButtonProps> = ({ type, onClick }) => {
  const isKakao = type === 'kakao';
  const label = isKakao ? '카카오로 로그인' : '구글로 로그인';
  const bgColor = isKakao ? 'bg-[#FEE500]' : 'bg-white';
  const textColor = isKakao ? 'text-black' : 'text-black';

  return (
    <button
      onClick={onClick}
      className={`flex h-[50px] w-[335px] items-center justify-center rounded-full ${bgColor} ${textColor} relative text-[16px] font-medium shadow-sm`}
      aria-label={label}
    >
      <div className="absolute left-[24px] size-5">{isKakao ? <KakaoIcon /> : <GoogleIcon />}</div>

      {label}
    </button>
  );
};

export default BtnSocialLogin;
