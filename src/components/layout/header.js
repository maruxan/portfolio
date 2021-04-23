import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from '../navigation/logo';

const Header = ({ siteTitle, openMenu }) => (
  <header className="bg-gray-300 h-20 flex items-center">
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <Logo />
      <button
        className="text-xl px-1 transition border-b-2 border-transparent hover:border-black"
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