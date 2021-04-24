import React from 'react';

import NavigationItems from './navigationItems';

export default function NavMenu({ show, closeMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-md h-screen transition z-50 transform bg-gray-200 shadow-xl ${
        show ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <div className="mr-[4vw] h-full flex flex-col">
        {/* close buton */}
        <div className="h-20 flex items-center justify-end">
          <button
            className="text-2xl md:text-xl px-1 transition border-b-2 border-transparent hover:border-black"
            onClick={closeMenu}>
            close
          </button>
        </div>
        {/* navigation */}
        <nav>
          <NavigationItems closeMenu={closeMenu} />
        </nav>
      </div>
    </div>
  );
}
