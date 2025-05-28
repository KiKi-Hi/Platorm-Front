type IconProps = {
    filled?: boolean;
    className?: string;
};

const HomeIcon = ({ filled = false, className = 'w-[30px] h-[30px] text-[#AFAFB4]' }: IconProps) => {
    return filled ? (
        <svg
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M7.91338 10H22.0871..."
                fill="#FF9800"
                fillOpacity="0.2"
            />
            <path
                d="M11.2496 13.75V7.5..."
                stroke="#FF9800"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ) : (
        <svg
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M11.2496 13.75V7.5..."
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HomeIcon;