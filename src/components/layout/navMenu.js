import React from 'react';

import NavigationItems from '../navigation/navigationItems';
import Contact from '../navigation/contact';

export default function NavMenu({ show, closeMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-md h-screen transition ease-in-out z-50 transform bg-gray-200 shadow-xl ${
        show ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <div className="mr-[4vw] h-full flex flex-col justify-between">
        {/* close buton */}
        <div className="h-20 flex items-center justify-end">
          <button
            className="text-2xl md:text-xl px-3 py-2 transition hover:shadow-md active:shadow-inner rounded-lg focus:outline-none"
            onClick={closeMenu}>
            close &#x2715;
          </button>
        </div>
        {/* navigation */}
        <nav>
          <NavigationItems closeMenu={closeMenu} />
        </nav>
        {/* contact */}
        <Contact />
      </div>
    </div>
  );
}
