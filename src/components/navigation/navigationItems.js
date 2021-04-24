import React from 'react';
import { Link } from 'gatsby';

import { AiOutlineRight } from 'react-icons/ai';

export default function NavigationItems({ closeMenu }) {
  return (
    <ul className="text-4xl flex flex-col items-end">
      <li>
        <Link
          to="/"
          className="flex items-center group py-1"
          onClick={closeMenu}>
          <AiOutlineRight className="transition duration-75 transform translate-x-2 text-transparent  group-hover:text-gray-900 group-hover:translate-x-0" />
          <p>/projects</p>
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="flex items-center group py-1"
          onClick={closeMenu}>
          <AiOutlineRight className="transition duration-75 transform translate-x-2 text-transparent  group-hover:text-gray-900 group-hover:translate-x-0" />
          <p>/about</p>
        </Link>
      </li>
    </ul>
  );
}
