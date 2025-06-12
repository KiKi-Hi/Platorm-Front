import React from "react";
import logoImage from "@assets/img/logo/logo.svg";
import BtnSocialLogin from "./components/BtnSocialLogin";

const LoginPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="flex-1 flex items-center justify-center min-h-[40vh]">
                <img
                    src={logoImage}
                    alt="KikiHi 로고"
                    className="w-[200px] transform -translate-y-10"
                />
            </div>
            <div className="flex-1 flex flex-col justify-start items-center gap-4 px-6">
                <BtnSocialLogin type="kakao"/>
                <BtnSocialLogin type="google"/>
            </div>
        </div>
    );
};

export default LoginPage;