type IconProps = {
  className?: string;
};

function XIcon({ className = 'w-6 h-6 text-gray-900' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default XIcon;
