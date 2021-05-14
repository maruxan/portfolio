import * as React from 'react';
import PropTypes from 'prop-types';

import Logo from '../ui/logo';

const Header = ({ siteTitle, openMenu }) => (
  <header className="fixed top-0 w-full bg-gray-50 h-20 flex items-center z-40 select-none">
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <Logo />
      <button
        className="text-2xl md:text-xl px-3 py-2 transition hover:shadow-md active:shadow-inner rounded-lg focus:outline-none"
        onClick={openMenu}>
        menu ==
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
