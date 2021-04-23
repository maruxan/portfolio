import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from '../navigation/logo';

const Header = ({ siteTitle }) => (
  <header className="bg-gray-300 h-20 flex items-center">
    <div className="w-11/12 mx-auto">
      <Logo />
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
