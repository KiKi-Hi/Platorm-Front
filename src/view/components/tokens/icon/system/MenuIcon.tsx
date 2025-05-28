type MenuIconType = 'hamburger' | 'kebab';

type MenuIconProps = {
    type?: MenuIconType;
    className?: string;
};

const MenuIcon = ({ type = 'hamburger', className = 'w-6 h-6 text-gray-900' }: MenuIconProps) => {
    const commonProps = {
        stroke: 'currentColor',
        strokeWidth: type === 'kebab' ? 3 : 1.6,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    };

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {type === 'hamburger' && (
                <>
                    <path d="M4 6H20" {...commonProps} />
                    <path d="M4 12H20" {...commonProps} />
                    <path d="M4 18H20" {...commonProps} />
                </>
            )}

            {type === 'kebab' && (
                <>
                    <path d="M12 18.5H12.0101" {...commonProps} />
                    <path d="M12 12H12.0101" {...commonProps} />
                    <path d="M12.01 5.5H12.02" {...commonProps} />
                </>
            )}
        </svg>
    );
};

export default MenuIcon;