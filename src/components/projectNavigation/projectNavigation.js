import React from 'react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export default function ProjectNavigation() {
  return (
    <div className="hidden md:flex justify-between items-center text-xl text-gray-500 w-2/3">
      <div className="flex items-center hover:text-gray-900">
        <BsArrowLeft className="text-3xl" />
        <div className="ml-2">prev</div>
      </div>

      {/* the width of the line should represent the slider time */}
      <div className="flex-grow h-[2px] mx-6 bg-gray-400"></div>

      <div className="flex items-center hover:text-gray-900">
        <div className="mr-2">next</div>
        <BsArrowRight className="text-3xl" />
      </div>
    </div>
  );
}
