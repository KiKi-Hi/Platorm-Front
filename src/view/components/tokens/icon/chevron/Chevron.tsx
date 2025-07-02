type ChevronDirection = 'right' | 'down' | 'up';
type ChevronSize = 'S' | 'M' | 'L';

type ChevronIconProps = {
  direction?: ChevronDirection;
  size?: ChevronSize;
  className?: string;
};

const sizeMap: Record<ChevronSize, { w: number; h: number; viewBox: string }> = {
  S: { w: 12, h: 12, viewBox: '0 0 12 12' },
  M: { w: 18, h: 18, viewBox: '0 0 18 18' },
  L: { w: 24, h: 24, viewBox: '0 0 24 24' },
};

const pathMap: Record<ChevronDirection, string> = {
  right: 'M4.5 3L7.5 6L4.5 9',
  down: 'M3 4.5L6 7.5L9 4.5',
  up: 'M3 7.5L6 4.5L9 7.5',
};

function ChevronIcon({
  direction = 'right',
  size = 'M',
  className = 'text-gray-900',
}: ChevronIconProps) {
  const { w, h, viewBox } = sizeMap[size];

  const getPath = () => {
    if (size === 'L') {
      if (direction === 'right') return 'M9 6L15 12L9 18';
      if (direction === 'down') return 'M6 9L12 15L18 9';
      if (direction === 'up') return 'M6 15L12 9L18 15';
    } else if (size === 'M') {
      if (direction === 'right') return 'M6.75 4.5L11.25 9L6.75 13.5';
      if (direction === 'down') return 'M4.5 6.75L9 11.25L13.5 6.75';
      if (direction === 'up') return 'M4.5 11.25L9 6.75L13.5 11.25';
    }
    return pathMap[direction];
  };

  return (
    <svg
      width={w}
      height={h}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={getPath()}
        stroke="currentColor"
        strokeWidth={size === 'S' ? 1.2 : 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronIcon;
