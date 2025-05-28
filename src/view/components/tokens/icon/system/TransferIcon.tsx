type TransferIconType = 'upload' | 'download';

type TransferIconProps = {
    type?: TransferIconType;
    className?: string;
};

const TransferIcon = ({ type = 'upload', className = 'w-6 h-6 text-gray-900' }: TransferIconProps) => {
    const commonProps = {
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
    };

    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            {type === 'upload' ? (
                <>
                    <path d="M8 9H7C6.46957 9 5.96086 9.21071 5.58579 9.58579C5.21071 9.96086 5 10.4696 5 11V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V11C19 10.4696 18.7893 9.96086 18.4142 9.58579C18.0391 9.21071 17.5304 9 17 9H16" {...commonProps} />
                    <path d="M12 14V3M12 3L9 6M12 3L15 6" {...commonProps} />
                </>
            ) : (
                <>
                    <path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" {...commonProps} />
                    <path d="M7 11L12 16M12 16L17 11M12 16V4" {...commonProps} />
                </>
            )}
        </svg>
    );
};

export default TransferIcon;