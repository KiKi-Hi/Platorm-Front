import {ImageOption} from "@view/components/tokens/image/image.type";

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
            className={`
        relative w-[64px] h-[64px] border rounded
        ${selected ? 'border-orange-500 ring-2 ring-orange-300' : 'border-gray-300'}
        ${image.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:ring-1'}
      `}
        >
            <img src={image.src} alt={image.alt ?? ''} className="object-cover w-full h-full" />
            {selected && (
                <span className="absolute top-1 right-1 w-3 h-3 bg-orange-500 rounded-full border border-white" />
            )}
        </button>
    );
}