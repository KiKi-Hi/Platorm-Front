import React from 'react';
import TopLogo from '@assets/img/logo/topbar-logo.svg';
import SearchIcon from '@assets/icon/menu/search.svg';
import CartIcon from '@assets/icon/menu/cart.svg';
import MenuIcon from '@assets/icon/menu/menu.svg';

function TopBar() {
  return (
    <div className="left-0 flex h-[44px] w-96 items-center justify-between">
      <div className="relative h-5 w-20">
        <TopLogo />
      </div>
      <div className="flex items-start justify-start gap-4">
        <div data-role="Default" data-size="L" className="flex items-center justify-start gap-2.5">
          <div className="relative size-6 overflow-hidden">
            <SearchIcon />
          </div>
        </div>
        <div data-role="Default" data-size="L" className="flex items-center justify-start gap-2.5">
          <div className="relative size-6 overflow-hidden">
            <CartIcon />
          </div>
        </div>
        <div data-role="Default" data-size="L" className="flex items-center justify-start gap-2.5">
          <div className="relative size-6 overflow-hidden">
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
