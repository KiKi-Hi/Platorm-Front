/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { color } from '../../../../components/tokens/design/designTokens';

const IconButton = styled.button`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    padding: 0;
`;

const paths = {
    back: 'M15 18L9 12L15 6',
    search: 'M21 21L15.8 15.8M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z',
    cart: 'M6 6h15l-1.5 9h-12L6 6z M6 6L5 3H2',
    menu: 'M4 6h16M4 12h16M4 18h16',
    heart: 'M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6l1.2 1.2L12 21l7.6-7.6 1.2-1.2a5.4 5.4 0 0 0 0-7.6z',
    share: 'M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M12 16V4m0 0l-4 4m4-4 4 4',
};

const Svg = ({
                 path,
                 size = 24,
                 stroke = color.icon,
             }: {
    path: string;
    size?: number;
    stroke?: string;
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d={path} />
    </svg>
);

export { Svg, paths, IconButton };