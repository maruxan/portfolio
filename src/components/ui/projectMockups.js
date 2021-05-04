import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

export default function ProjectMockups({ desktop, mobile }) {
  return (
    <div className="relative w-full h-full">
      {/* Desktop */}
      <figure className="">
        <StaticImage
          src="../../images/marq-desktop.png"
          alt="Project desktop view"
        />
        <figcaption className="text-center mt-2">desktop view</figcaption>
      </figure>
      {/* Mobile */}
      <figure className="w-full">
        <StaticImage
          src="../../images/marq-mobile.png"
          alt="Project mobile view"
          className="w-56 mx-auto block"
        />
        <figcaption className="text-center">mobile view</figcaption>
      </figure>
    </div>
  );
}
