import { ImageOption } from '@view/components/tokens/image/image.type';

export function ImageOptionItem({
  image,
  selected,
  onClick,
}: {
  image: ImageOption;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative size-[64px] rounded border ${selected ? 'border-orange-500 ring-2 ring-orange-300' : 'border-gray-300'} ${image.disabled ? 'cursor-not-allowed opacity-40' : 'hover:ring-1'} `}
    >
      <img src={image.src} alt={image.alt ?? ''} className="size-full object-cover" />
      {selected && (
        <span className="absolute right-1 top-1 size-3 rounded-full border border-white bg-orange-500" />
      )}
    </button>
  );
}
