type HeartIconProps = {
    filled?: boolean;
    className?: string;
};

const HeartIcon = ({ filled = false, className = 'w-6 h-6 text-black' }: HeartIconProps) => {
    return filled ? (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6.97913 3.07352C7.86419 2.92272 8.77181 ..." />
        </svg>
    ) : (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.5003 12.5717L12.0003 19.9997L4.5003 ..."
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HeartIcon;