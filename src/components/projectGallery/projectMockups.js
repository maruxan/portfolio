import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

export default function ProjectMockups({ desktop, mobile }) {
  return (
    <div className="w-full h-full lg:flex lg:flex-row-reverse items-center">
      {/* Desktop */}
      <figure className="m-0 lg:pr-[4vw] lg:w-4/5 transform lg:-translate-y-6">
        <StaticImage
          src="../../images/marq-desktop.png"
          alt="Project desktop view"
          className="rounded-xl"
        />
        <figcaption className="text-center my-2 lg:hidden">
          desktop view
        </figcaption>
      </figure>
      {/* Mobile */}
      <figure className="m-0 pb-24 lg:pb-0 w-full lg:w-1/5 transform lg:translate-x-1/2 lg:translate-y-16">
        <StaticImage
          src="../../images/marq-mobile.png"
          alt="Project mobile view"
          className="w-56 mx-auto block lg:w-full"
        />
        <figcaption className="text-center lg:hidden">mobile view</figcaption>
      </figure>
    </div>
  );
}
