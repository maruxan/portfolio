import React from 'react';

export default function Backdrop({ show, closeMenu }) {
  return show ? (
    <div
      className="fixed inset-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-40"
      onClick={closeMenu}></div>
  ) : null;
}
