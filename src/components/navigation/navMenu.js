import React from 'react';

export default function NavMenu({ show, closeMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 w-full max-w-md h-screen transition z-50 transform ${
        show ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <div className="fixed top-0 right-0 w-full h-screen max-w-md bg-gray-200 shadow-xl"></div>
      <div className="fixed inset-0 mr-[4vw] h-full flex flex-col">
        <div className="h-20 flex items-center justify-end">
          <button
            className="text-xl px-1 transition border-b-2 border-transparent hover:border-black"
            onClick={closeMenu}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
