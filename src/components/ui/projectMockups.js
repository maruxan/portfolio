import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

export default function ProjectMockups({ desktop, mobile }) {
  return (
    <div className="relative w-full h-full">
      {/* Desktop */}
      <div className="">
        <StaticImage
          src="../../images/marq-desktop.png"
          alt="Project desktop view"
        />
      </div>
      <p>desktop view</p>
      {/* Mobile */}
      <div className="p-2">
        <StaticImage
          src="../../images/marq-mobile.png"
          alt="Project mobile view"
          className="w-auto"
        />
      </div>
    </div>
  );
}
