/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { css } from '@emotion/react';
import { theme } from '@view/styles/theme';

export function ErrorPage() {
  const error = useRouteError() as Error;

  return (
      <div css={css`position: relative; width: 100%; height: 100%; overflow: hidden; background-color: white;`}>
        <div css={css`position: absolute;top: 0;left: 0;width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.7);`}/>
        <div css={css`position: absolute; top: 30%; left: 30%;width: 320px;display: flex;flex-direction: column;align-items: flex-end;gap: 28px;padding: 16px;background-color: ${theme.colors.bg.white};border-radius: 16px;`}>
          <div css={css`display: flex;flex-direction: column;align-items: flex-end;gap: 4px;`}>
            <div css={css`display: flex;align-items: center;gap: 10px;`}>
              <div css={css`position: relative;width: 24px;height: 24px;overflow: hidden;`}>
                <div
                    css={css`
                  position: absolute;
                  left: 6px;
                  top: 6px;
                  width: 12px;
                  height: 12px;
                  outline: 1.6px solid ${theme.colors.bg.white};
                  outline-offset: -0.8px;
                `}
                />
              </div>
            </div>

            <div
                css={css`
              width: 288px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              padding: 20px 0;
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
              <div css={css`color: ${theme.colors.text.default0};font-size: 14px;font-weight: 400;text-align: center;`}>
                {error?.message || '일시적인 오류가 발생했습니다. 잠시 후에 다시 시도해주세요!'}
              </div>
            </div>
          </div>

          <div css={css`align-self: stretch;height: 44px;display: flex;align-items: center;justify-content: center;background-color: ${theme.colors.fill.highlight};border-radius: 8px;cursor: pointer;`} onClick={() => (window.location.href = '/')}>
            <div css={css`color: ${theme.colors.text.white};font-size: 20px;font-weight: 700;line-height: 44px;`}>확인</div>
          </div>
        </div>
      </div>
  );
}

export default ErrorPage;