/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '../tokens/design/designTokens';

export const Screen = styled.div`
  width: 375px;
  min-height: 100vh;
  background: ${color.bg};
  color: ${color.text};
  position: relative;
  overflow-x: hidden;
  margin: 0 auto;
`;

export const Row = styled.div<{ gap?: number; between?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ gap = 8 }) => gap}px;
  ${({ between }) =>
    between &&
    css`
      justify-content: space-between;
    `}
`;

export const Section = styled.section`
  padding: 16px 20px;
`;

export const P = styled.p<{ size?: number; weight?: number; light?: boolean }>`
  margin: 0;
  line-height: 1.5;
  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ weight = 400 }) => weight};
  color: ${({ light }) => (light ? color.textLight : color.text)};
`;