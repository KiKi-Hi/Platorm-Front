import React from "react";
import Logo from "@assets/img/logo/logo.svg";
import BtnSocialLogin from "./components/BtnSocialLogin";
import {googleLogin, kakaoLogin} from "@service/feature/auth/authApi";

const LoginPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col relative">
            <div className="flex-1 flex items-center justify-center min-h-[40vh]">
                <Logo />
            </div>
            <div className="flex flex-col w-full justify-start items-center gap-4 px-6 absolute bottom-[20%] min-bottom">
                <BtnSocialLogin type="kakao" onClick={kakaoLogin} />
                <BtnSocialLogin type="google" onClick={googleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;