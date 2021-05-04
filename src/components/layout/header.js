import * as React from 'react';
import PropTypes from 'prop-types';

import Logo from '../ui/logo';

const Header = ({ siteTitle, openMenu }) => (
  <header className="fixed top-0 w-full bg-gray-100 h-20 flex items-center z-40">
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <Logo />
      <button
        className="text-2xl md:text-xl px-2 py-1 hover:underline focus:outline-none active:italic"
        onClick={openMenu}>
        menu
      </button>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
