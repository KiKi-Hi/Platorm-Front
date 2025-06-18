import React from "react";
import KakaoIcon from "@assets/icon/brand/kakao.svg";
import GoogleIcon from "@assets/icon/brand/google.svg";

interface SocialLoginButtonProps {
    type: "kakao" | "google";
    onClick?: () => void;
}

const BtnSocialLogin: React.FC<SocialLoginButtonProps> = ({type, onClick}) => {
    const isKakao = type === "kakao";
    const label = isKakao ? "카카오로 로그인" : "구글로 로그인";
    const bgColor = isKakao ? "bg-[#FEE500]" : "bg-white";
    const textColor = isKakao ? "text-black" : "text-black";

    return (
        <button
            onClick={onClick}
            className={`w-[335px] h-[50px] flex items-center justify-center rounded-full ${bgColor} ${textColor} text-[16px] font-medium shadow-sm relative`}
            aria-label={label}
        >
            <div className="w-5 h-5 absolute left-[24px] ">
                {isKakao ? <KakaoIcon/> : <GoogleIcon/>}
            </div>

            {label}
        </button>
    );
};

export default BtnSocialLogin;