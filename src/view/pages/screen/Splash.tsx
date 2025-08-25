/** @jsxImportSource @emotion/react */
import React, { useEffect, useMemo } from 'react';
import { css, keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import LogoMark from './components/LogoMark';

const slideOutLeft = keyframes`
    from { transform: translateX(0); }
    to   { transform: translateX(-100%); }
`;
const slideOutRight = keyframes`
    from { transform: translateX(0); }
    to   { transform: translateX(100%); }
`;
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const screen = css`
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    background: #323237;
    overflow: hidden;
`;

const logoStyle = css`
    animation: ${fadeIn} 480ms ease-out both 240ms;
`;

const curtainBase = css`
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: #323237;
    pointer-events: none;
`;

export default function Splash() {
    const navigate = useNavigate();
    const reduce = useMemo(
        () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
        []
    );

    useEffect(() => {
        localStorage.setItem('visited', 'true');
        const id = setTimeout(() => {
            navigate('/login', { replace: true });
        }, 2500);

        return () => clearTimeout(id);
    }, [navigate]);

    return (
        <div css={screen}>
            <div css={logoStyle}>
                <LogoMark />
            </div>
            <div
                css={css`
                    ${curtainBase};
                    left: 0;
                    ${!reduce ? `animation: ${slideOutLeft} 300ms ease-in both 2200ms;` : ''}
                `}
            />
            <div
                css={css`
                    ${curtainBase};
                    right: 0;
                    ${!reduce ? `animation: ${slideOutRight} 300ms ease-in both 2200ms;` : ''}
                `}
            />
        </div>
    );
}