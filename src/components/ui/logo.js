import React, { useState } from 'react';

export default function Logo() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div
      className="flex text-3xl max-w-max cursor-default"
      onMouseEnter={() => setIsExtended(true)}
      onMouseLeave={() => setIsExtended(false)}
      role="button"
      tabIndex="0">
      <div>/m</div>
      <div
        className={`mr-2 hidden transition opacity-0 origin-left animate-fadeInBottom ${
          isExtended ? 'md:inline-block' : ''
        }`}>
        auricio
      </div>
      <div>g</div>
      <div
        className={`hidden transition opacity-0 origin-left animate-fadeInTop ${
          isExtended ? 'md:inline-block' : ''
        }`}>
        aravaglia
      </div>
    </div>
  );
}
