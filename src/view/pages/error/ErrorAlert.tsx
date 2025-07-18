/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { theme } from '@view/styles/theme';

type ErrorAlertProps = {
  message: string | null;
  onDismiss: () => void;
};

export function ErrorAlert({
                             message = '일시적인 오류가 발생했습니다.',
                             onDismiss,
                           }: ErrorAlertProps) {
  return (
      <div
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 9999;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
          `}
      >
        <div
            css={css`
              width: 320px;
              background-color: ${theme.colors.bg.white};
              border-radius: 16px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
              padding: 24px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 28px;
            `}
        >
          {/* 아이콘 영역 */}
          <div
              css={css`
            position: relative;
            width: 24px;
            height: 24px;
          `}
          >
            <div
                css={css`
              position: absolute;
              left: 6px;
              top: 6px;
              width: 12px;
              height: 12px;
              outline: 1.6px solid ${theme.colors.bg.white};
              outline-offset: -0.8px;
              border-radius: 2px;
            `}
            />
          </div>

          {/* 메시지 */}
          <div
              css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          `}
          >
            <div
                css={css`
              color: ${theme.colors.text.default0};
              font-size: 16px;
              font-weight: 600;
              text-align: center;
            `}
            >
              다시 시도해주세요!
            </div>
            <div
                css={css`
              color: ${theme.colors.text.default0};
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              word-break: keep-all;
              line-height: 1.5;
            `}
            >
              {message || '일시적인 오류가 발생했습니다. 잠시 후에 다시 시도해주세요!'}
            </div>
          </div>

          {/* 확인 버튼 */}
          <button
              css={css`
            width: 100%;
            height: 44px;
            background-color: ${theme.colors.fill.highlight};
            color: ${theme.colors.text.white};
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
          `}
              onClick={onDismiss}
          >
            확인
          </button>
        </div>
      </div>
  );
}

export default ErrorAlert;
