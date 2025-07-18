/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../components/tokens/icon/nav/HomeIcon';
import CustomizeIcon from '../../components/tokens/icon/nav/CustomizeIcon';
import BookmarkIcon from '../../components/tokens/icon/nav/BookmarkIcon';
import ProfileIcon from '../../components/tokens/icon/nav/ProfileIcon';

interface GNBProps {
  current: string;
}

const GNB = ({ current }: GNBProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navItems = [
    { label: '홈', icon: HomeIcon, path: '/' },
    { label: '커스텀', icon: CustomizeIcon, path: '/custom' },
    { label: '북마크', icon: BookmarkIcon, path: '/bookmark' },
    { label: '마이페이지', icon: ProfileIcon, path: '/mypage' },
  ];

  const containerStyle = css`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 640px;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.fill.white};
    padding: ${theme.spacing[8]} ${theme.spacing[16]};
    border-top: 1px solid ${theme.colors.line.light1};
    z-index: 100;
  `;

  const itemStyle = (isActive: boolean) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    color: ${isActive ? theme.colors.text.highlight : theme.colors.text.extraLight15};
    font-size: 12px;
    font-weight: ${isActive ? 700 : 500};
    cursor: pointer;

    svg {
      width: 30px;
      height: 30px;
      margin-bottom: ${theme.spacing[4]};
    }
  `;

  return (
      <nav css={containerStyle}>
        {navItems.map(({ label, icon: Icon, path }) => {
          const isActive = current === label;
          return (
              <div
                  key={label}
                  css={itemStyle(isActive)}
                  onClick={() => navigate(path)}
              >
                <Icon filled={isActive} />
                <span>{label}</span>
              </div>
          );
        })}
      </nav>
  );
};

export default GNB;
