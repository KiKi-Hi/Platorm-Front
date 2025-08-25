import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type SidebarProps = {
    isVisible: boolean;
    onClose?: () => void;
};

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
`;

const Overlay = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1003;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
    transition: opacity 300ms ease-out, visibility 300ms ease-out;
`;

const Container = styled.aside<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    //max-width: 375px;
    height: 100vh;
    background: #fff;
    z-index: 1004;
    overflow: hidden;
    animation: ${({ isVisible }) => (isVisible ? slideIn : slideOut)} 300ms ease-out forwards;
`;

const TopNav = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 20px;
`;

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: #323237;
`;

const BackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M15 6L9 12l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px;
`;

const CategoryCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: #e6e6eb;
  border-radius: 12px;
`;

const CategoryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
            x="3"
            y="5"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <path
            d="M10 19h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M6.3 11.8l.45-1.04 1.04-.45-1.04-.45L6.3 8.8l-.45 1.04-1.04.45 1.04.45.45 1.04z"
            fill="currentColor"
        />
    </svg>
);

const List = styled.ul`
    list-style: none;
    padding: 0 0 8px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Footer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const CategoryText = styled.span`
    color: #323237;
    font-size: 14px;
    font-family: Pretendard, sans-serif;
    font-weight: 600;
    line-height: 21px;
    word-wrap: break-word;
`;

const ItemText = styled.span`
    color:  #69696e;
    font-size: 14px;
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
`;

const FooterText = styled.span`
    color: #96969b;
    font-size: 14px;
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    line-height: 21px;
    word-wrap: break-word;
    text-align: center;
`;

export const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
    const categories = ["키보드", "하우징", "스위치", "키캡", "악세서리", "케이스"];

    return (
        <>
            <Overlay isVisible={isVisible} onClick={onClose} />
            <Container isVisible={isVisible}>
                <TopNav>
                    <BackBtn aria-label="뒤로 가기" onClick={onClose}>
                        <BackIcon />
                    </BackBtn>
                </TopNav>

                <Main>
                    <CategoryCard>
                        <BackBtn as="div" aria-hidden>
                            <CategoryIcon />
                        </BackBtn>
                        <CategoryText>카테고리</CategoryText>
                    </CategoryCard>

                    <List>
                        {categories.map((name) => (
                            <li key={name}>
                                <ItemText>{name}</ItemText>
                            </li>
                        ))}
                    </List>
                </Main>

                <Footer>
                    <FooterText>홈화면에 추가</FooterText>
                    <FooterText>로그아웃</FooterText>
                </Footer>
            </Container>
        </>
    );
};

export default Sidebar;