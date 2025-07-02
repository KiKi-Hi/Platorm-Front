import React from 'react';

const categories = [
  { name: '하우징', image: 'House.png' },
  { name: '스위치', image: 'Switch.png' },
  { name: '키캡', image: 'Keycap.png' },
  { name: '악세서리', image: 'Accessories.png' },
  { name: '케이스', image: 'Case.png' },
];

function CategoryChips({ selected }: { selected: string }) {
  return (
    <div className="flex gap-2.5 px-5 py-4">
      {categories.map((cat) => (
        <div key={cat.name} className="flex flex-col items-center">
          <img
            className="size-16 rounded-full"
            src={`/assets/img/category/${cat.image}`}
            alt={cat.name}
          />
          <div
            className={`text-sm font-medium ${selected === cat.name ? 'text-Text-Black' : 'text-Text-ExtraLight-15'}`}
          >
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryChips;
