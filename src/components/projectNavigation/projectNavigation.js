import React from 'react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function ProjectNavigation() {
  return (
    <div className="hidden md:flex justify-between items-center text-xl text-gray-500 w-2/3">
      <div
        className="transition hover:text-gray-900 hover:shadow-md active:shadow-inner px-3 py-2 rounded-lg"
        role="button">
        <div className="min-w-max">{'<--'} prev</div>
      </div>

      {/* the width of the line should represent the slider time */}
      <div className="flex-grow h-2 w-full mx-6 bg-gray-100 shadow-inner rounded-lg"></div>

      <div
        className="transition hover:text-gray-900 hover:shadow-md active:shadow-inner px-3 py-2 rounded-lg"
        role="button">
        <div className="min-w-max">next {'-->'}</div>
      </div>
    </div>
  );
}
