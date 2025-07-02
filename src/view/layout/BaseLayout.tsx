import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function BaseLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`min-h-screen ${isLoginPage ? 'bg-[#333237]' : 'bg-gray-100'}`}>
      <div
        className={`mx-auto min-h-screen w-full max-w-screen-sm ${!isLoginPage && 'bg-white shadow-lg'} md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
