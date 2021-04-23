import React, { useState } from 'react';

export default function Logo() {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div
      className="flex text-2xl"
      onMouseEnter={() => setIsExtended(true)}
      onMouseLeave={() => setIsExtended(false)}>
      <div>/m</div>
      <div
        className={`mr-2 hidden transition opacity-0 ${
          isExtended ? 'md:block opacity-100' : ''
        }`}>
        auricio
      </div>
      <div>g</div>
      <div
        className={`hidden  transition opacity-0 ${
          isExtended ? 'md:block opacity-100' : ''
        }`}>
        aravaglia
      </div>
    </div>
  );
}
