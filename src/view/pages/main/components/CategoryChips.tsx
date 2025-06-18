import React from 'react'
const categories = ["하우징", "스위치", "키캡", "악세서리", "케이스"];

const CategoryChips = ({ selected }: { selected: string }) => (
    <div className="flex gap-4 px-5 py-4">
        {categories.map((cat) => (
            <div key={cat} className="flex flex-col items-center">
                <img className="w-16 h-16 rounded-full border-2 border-Line-ExtraHard-15" src="https://placehold.co/72x72" />
                <div
                    className={`text-sm font-medium ${selected === cat ? 'text-Text-Black' : 'text-Text-ExtraLight-15'}`}
                >
                    {cat}
                </div>
            </div>
        ))}
    </div>
);

export default CategoryChips;