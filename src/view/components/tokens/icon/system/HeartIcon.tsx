/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {iconSmallStyle} from "@view/styles";

type HeartIconProps = {
  filled?: boolean;
  size?: number;
  color?: string;
};

function HeartIcon({ filled = false, size = 24, color = 'black' }: HeartIconProps) {

  return filled ? (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      css={iconSmallStyle}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.97913 3.07352C7.86419 2.92272 8.77181 2.97247 9.63509 3.21909C10.4984 3.46572 11.2953 3.90294 11.9671 4.49852L12.0041 4.53152L12.0381 4.50152C12.6793 3.93882 13.4331 3.51932 14.2493 3.27101C15.0655 3.02269 15.9252 2.95128 16.7711 3.06152L17.0171 3.09752C18.0834 3.28163 19.0801 3.75068 19.9016 4.45499C20.7231 5.15931 21.3388 6.07267 21.6836 7.09836C22.0283 8.12405 22.0893 9.22388 21.86 10.2814C21.6307 11.3389 21.1197 12.3147 20.3811 13.1055L20.2011 13.2905L20.1531 13.3315L12.7031 20.7105C12.5312 20.8807 12.3034 20.9828 12.062 20.9978C11.8206 21.0129 11.5819 20.94 11.3901 20.7925L11.2961 20.7105L3.80313 13.2885C3.00935 12.5162 2.44483 11.5392 2.17209 10.4658C1.89935 9.39238 1.92903 8.26442 2.25785 7.20684C2.58666 6.14926 3.20179 5.20332 4.03509 4.4738C4.86839 3.74427 5.88735 3.25962 6.97913 3.07352Z" fill="#FF9800"/>
      <defs>
        <filter id="filter0_d_168_1500" x="-1" y="-1" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_168_1500"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_168_1500" result="shape"/>
        </filter>
      </defs>
    </svg>
) : (
    <svg viewBox="0 0 24 24" fill="none" css={iconSmallStyle} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5003 12.5717L12.0003 19.9997L4.5003 12.5717C4.00561 12.0903 3.61594 11.5117 3.35585 10.8723C3.09575 10.2329 2.97086 9.54664 2.98904 8.85662C3.00721 8.1666 3.16806 7.48782 3.46146 6.86303C3.75485 6.23823 4.17444 5.68094 4.69379 5.22627C5.21314 4.77159 5.82101 4.42938 6.47911 4.22117C7.13722 4.01296 7.83131 3.94327 8.51767 4.01649C9.20403 4.08971 9.8678 4.30425 10.4672 4.64659C11.0666 4.98894 11.5885 5.45169 12.0003 6.00569C12.4138 5.45571 12.9364 4.99701 13.5354 4.65829C14.1344 4.31958 14.7968 4.10814 15.4812 4.03721C16.1657 3.96628 16.8574 4.03739 17.5131 4.24608C18.1688 4.45477 18.7743 4.79656 19.2919 5.25005C19.8094 5.70354 20.2277 6.25897 20.5207 6.88158C20.8137 7.50419 20.975 8.18057 20.9946 8.8684C21.0142 9.55622 20.8916 10.2407 20.6344 10.8789C20.3773 11.5172 19.9912 12.0955 19.5003 12.5777" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <filter id="filter0_d_168_1501" x="-1" y="-1" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_168_1501"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_168_1501" result="shape"/>
        </filter>
      </defs>
     </svg>
);
}

export default HeartIcon;
