import React from 'react';

export default function Backdrop({ show, closeMenu }) {
  const keyPressHandler = (event) => {
    console.log(event.key);
    if (event.key === 'Esc') closeMenu();
  };

  return show ? (
    <div
      className="fixed inset-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-40"
      onClick={closeMenu}
      onKeyPress={keyPressHandler}
      role="button"
      tabIndex="0"
      aria-label="close menu"></div>
  ) : null;
}
