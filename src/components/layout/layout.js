/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import NavMenu from './navMenu';
import Backdrop from '../ui/backdrop';
import '../../styles/layout.css';

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        openMenu={() => setShowMenu(true)}
      />
      <Backdrop show={showMenu} closeMenu={() => setShowMenu(false)} />
      <NavMenu show={showMenu} closeMenu={() => setShowMenu(false)} />
      <main className="select-none">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
