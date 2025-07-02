import React from 'react';
import { useNavigate } from 'react-router-dom';

type IconProps = {
  filled?: boolean;
  className?: string;
};

function CustomizeIcon({
  filled = false,
  className = 'w-[30px] h-[30px] text-[#AFAFB4]',
}: IconProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/custom');
  };
  return (
    <div>
      {filled ? (
        <svg
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path d="M11.25 15H18.75H11.25Z" fill="#FF9800" fillOpacity="0.2" />
          <path d="M15 11.25V18.75V11.25Z" fill="#FF9800" fillOpacity="0.2" />
          <path
            d="M3.75 6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25Z"
            fill="#FF9800"
            fillOpacity="0.2"
          />
          <path
            d="M11.25 15H18.75M15 11.25V18.75M3.75 6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25Z"
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
            d="M11.25 15H18.75M15 11.25V18.75M3.75 6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default CustomizeIcon;
