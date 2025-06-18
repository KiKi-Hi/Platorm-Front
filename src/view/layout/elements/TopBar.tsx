import React from 'react'
import TopLogo from '@assets/img/logo/topbar-logo.svg'
import SearchIcon from '@assets/icon/menu/search.svg'
import CartIcon from '@assets/icon/menu/cart.svg'
import MenuIcon from '@assets/icon/menu/menu.svg'

const TopBar = () => {
    return (
        <div className="w-96 left-0 top-[44px] flex items-start justify-between">
                <div className="w-20 h-5 relative">
                    <TopLogo/>
                </div>
                <div className="flex justify-start items-start gap-4">
                    <div data-role="Default" data-size="L"
                         className="flex justify-start items-center gap-2.5">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <SearchIcon/>
                        </div>
                    </div>
                    <div data-role="Default" data-size="L"
                         className="flex justify-start items-center gap-2.5">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <CartIcon/>
                        </div>
                    </div>
                    <div data-role="Default" data-size="L"
                         className="flex justify-start items-center gap-2.5">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <MenuIcon/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default TopBar;