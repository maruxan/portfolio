import React from 'react';

import { SiReact } from 'react-icons/si';

export default function Technologies({ technologies }) {
  return (
    <div className="flex">
      {technologies.map((t) => (
        <SiReact className="text-xl md:text-3xl mr-2" key={t} />
      ))}
    </div>
  );
}
