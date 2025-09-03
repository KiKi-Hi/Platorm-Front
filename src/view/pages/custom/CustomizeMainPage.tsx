/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

const CustomizeMainPage = () => {
  const theme = useTheme();

  const wrapper = css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[8]};
    width: 100%;
    padding: ${theme.spacing[20]};
    background-color: ${theme.colors.bg.white};
  `;

  const header = css`
    color: ${theme.colors.text.default0};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  `;

  const subHeader = css`
    color: ${theme.colors.text.light1};
    font-size: 12px;
    font-weight: 500;
  `;

  const cardContainer = css`
    display: flex;
    gap: ${theme.spacing[8]};
    width: 100%;
    overflow-x: auto;
  `;

  const card = css`
    width: 150px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
  `;

  const cardImage = css`
    height: 112px;
    overflow: hidden;
    border-radius: ${theme.radius.m};
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  const cardTitle = css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing[2]};
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.text.default0};
  `;

  const cardSubtitle = css`
    font-size: 12px;
    color: ${theme.colors.text.light1};
  `;

  const disabledTag = css`
    font-size: 12px;
    font-weight: 600;
    color: ${theme.colors.text.extraLight15};
  `;

  const noContentWrapper = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing[8]};
    background: ${theme.colors.bg.extraLight60};
    height: 361px;
    justify-content: center;
  `;

  const noContentMainText = css`
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.text.default0};
  `;

  const noContentSubText = css`
    font-size: 14px;
    color: ${theme.colors.text.light1};
  `;

  return (
      <div css={wrapper}>
        <div>
          <h2 css={header}>커스텀 시작하기</h2>
          <p css={subHeader}>하나하나 조립하는 나만의 키보드</p>
        </div>
        <div css={cardContainer}>
          <div css={card}>
            <div css={cardImage}>
              <img src="https://placehold.co/150x112" alt="60배열 키보드" />
            </div>
            <div>
              <div css={cardTitle}>60배열</div>
              <div css={cardSubtitle}>미니멀의 정점</div>
            </div>
          </div>
          <div css={card}>
            <div css={cardImage}>
              <img src="https://placehold.co/150x112" alt="75배열 키보드" />
            </div>
            <div>
              <div css={cardTitle}>75배열</div>
              <div css={[cardSubtitle, disabledTag]}>
                준비중
              </div>
            </div>
          </div>
          <div css={card}>
            <div css={cardImage}>
              <img src="https://placehold.co/150x112" alt="텐키리스 키보드"/>
            </div>
            <div>
              <div css={cardTitle}>텐키리스</div>
              <div css={[cardSubtitle, disabledTag]}>
                준비중
              </div>
            </div>
          </div>
          <div css={card}>
            <div css={cardImage}>
              <img src="https://placehold.co/150x112" alt="풀배열 키보드"/>
            </div>
            <div>
              <div css={cardTitle}>104/104 풀배열</div>
              <div css={[cardSubtitle, disabledTag]}>
                준비중
              </div>
            </div>
          </div>
        </div>
        <div css={noContentWrapper}>
          <p css={noContentMainText}>생성된 키보드가 없어요</p>
          <p css={noContentSubText}>커스텀으로 나만의 키보드를 만들어보세요</p>
        </div>
      </div>
  );
};

export default CustomizeMainPage;