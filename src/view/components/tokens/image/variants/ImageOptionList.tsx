import { ImageOptionItem } from '@view/components/tokens/image/variants/ImageOptionItem';
import { ImageOption } from '@view/components/tokens/image/image.type';

export function ImageOptionList({
  images,
  selectedId,
  onSelect,
}: {
  images: ImageOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {images.map((img) => (
        <ImageOptionItem
          key={img.id}
          image={img}
          selected={img.id === selectedId}
          onClick={() => !img.disabled && onSelect(img.id)}
        />
      ))}
    </div>
  );
}
