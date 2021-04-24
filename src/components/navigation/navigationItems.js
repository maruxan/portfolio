import React from 'react';
import { Link } from 'gatsby';

export default function NavigationItems({ closeMenu }) {
  return (
    <ul className="text-4xl text-right">
      <li>
        <Link to="/" className="inline-block py-1" onClick={closeMenu}>
          /projects
        </Link>
      </li>
      <li>
        <Link to="/about" className="inline-block py-1" onClick={closeMenu}>
          /about
        </Link>
      </li>
    </ul>
  );
}
