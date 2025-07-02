import React from 'react';
import HomeIcon from '../../components/tokens/icon/nav/HomeIcon';
import CustomizeIcon from '../../components/tokens/icon/nav/CustomizeIcon';
import BookmarkIcon from '../../components/tokens/icon/nav/BookmarkIcon';
import ProfileIcon from '../../components/tokens/icon/nav/ProfileIcon';

function GNB({ current }: { current: string }) {
  const navItems = [
    { label: '홈', icon: HomeIcon },
    { label: '커스텀', icon: CustomizeIcon },
    { label: '북마크', icon: BookmarkIcon },
    { label: '마이페이지', icon: ProfileIcon },
  ];

  return (
    <div
      className="absolute bottom-0 flex w-full items-center justify-between border-t border-Line-Hard-1 bg-Fill-White px-2 pb-7 pt-2"
      style={{ bottom: 0 }}
    >
      {navItems.map(({ label, icon: Icon }) => (
        <div key={label} className="flex flex-1 flex-col items-center">
          <div className="relative size-7">
            <Icon
              filled={current === label}
              className={`size-[30px] ${
                current === label ? 'text-Icon-Highlight' : 'text-Icon-ExtraLight-15'
              }`}
            />
          </div>
          <div
            className={`text-center text-xs font-semibold ${
              current === label ? 'text-Text-Highlight' : 'text-Text-ExtraLight-15'
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GNB;
