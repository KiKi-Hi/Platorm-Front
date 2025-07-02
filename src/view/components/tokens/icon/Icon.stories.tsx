import React, { useState } from 'react';
import * as Icons from './index';

const CATEGORIES = {
  system: [
    'CartIcon',
    'EditIcon',
    'HeartIcon',
    'MenuIcon',
    'NoneIcon',
    'PlusMinusIcon',
    'SearchIcon',
    'ShoppingBagIcon',
    'TransferIcon',
    'XIcon',
  ],
  nav: ['BookmarkIcon', 'CustomizeIcon', 'HomeIcon', 'ProfileIcon'],
  chevron: ['ChevronIcon'],
};

export default {
  title: 'Components/Icon',
};

export function AllIcons() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'all' | keyof typeof CATEGORIES>('all');

  const filtered = Object.entries(Icons).filter(([name]) => {
    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || CATEGORIES[category]?.includes(name);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search icon..."
          className="rounded border px-3 py-1 text-sm"
        />
        {['all', ...Object.keys(CATEGORIES)].map((key) => (
          <button
            key={key}
            onClick={() => setCategory(key as any)}
            className={`rounded px-3 py-1 text-sm ${
              category === key ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-6">
        {filtered.map(([name, Icon]) => (
          <div key={name} className="flex flex-col items-center space-y-1 text-center">
            <Icon className="size-6 text-gray-700 transition hover:text-primary" />
            <span className="text-xs text-gray-600">{name.replace(/Icon$/, '')}</span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-sm text-gray-400">No icons found.</div>
      )}
    </div>
  );
}
