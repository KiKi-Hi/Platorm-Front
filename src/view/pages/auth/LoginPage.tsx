import React from 'react';
import Logo from '@assets/img/logo/logo.svg';
import BtnSocialLogin from './components/BtnSocialLogin';
import {googleLogin, kakaoLogin} from "../../../controller/feature/auth/authApi";

function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex min-h-[40vh] flex-1 items-center justify-center">
        <Logo />
      </div>
      <div className="min-bottom absolute bottom-[20%] flex w-full flex-col items-center justify-start gap-4 px-6">
        <BtnSocialLogin type="kakao" onClick={kakaoLogin} />
        <BtnSocialLogin type="google" onClick={googleLogin} />
      </div>
    </div>
  );
}

export default LoginPage;
