import React from 'react';

import { SiReact } from 'react-icons/si';

export default function Technologies({ technologies }) {
  return (
    <div className="flex mb-6">
      {technologies.map((t) => (
        <SiReact className="text-3xl mr-2" key={t} />
      ))}
    </div>
  );
}
