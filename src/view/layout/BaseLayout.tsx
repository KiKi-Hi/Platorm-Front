import React from "react";
import {Outlet, useLocation} from "react-router-dom";

const BaseLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
        <div className={`min-h-screen ${isLoginPage ? 'bg-[#333237]' : 'bg-gray-100'}`}>
            <div className={`mx-auto w-full max-w-[390px] min-h-screen
                          ${!isLoginPage && 'bg-white shadow-lg'}
                          md:max-w-[430px] 
                          lg:max-w-[768px] 
                          xl:max-w-[1024px]`}>
                <Outlet/>
            </div>
        </div>
    )
}

export default BaseLayout