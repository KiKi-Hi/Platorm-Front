import React from 'react'

const GNB = ({ current }: { current: string }) => (
    <div className="w-full border-t border-Line-Hard-1 pt-2 pb-7 bg-Fill-White flex justify-between items-center px-2">
        {['홈', '커스텀', '북마크', '마이페이지'].map((label, idx) => (
            <div key={label} className="flex-1 flex flex-col items-center">
                <div className="w-7 h-7 relative">
                    <div
                        className={`w-6 h-6 absolute top-1 left-1 ${current === label ? 'outline outline-[1.6px] outline-Icon-Highlight bg-Icon-Highlight50/20' : 'outline outline-[1.6px] outline-Icon-ExtraLight-15'}`}
                    />
                </div>
                <div
                    className={`text-xs font-semibold text-center ${current === label ? 'text-Text-Highlight' : 'text-Text-ExtraLight-15'}`}
                >
                    {label}
                </div>
            </div>
        ))}
    </div>
);

export default GNB;