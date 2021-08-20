import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function ProjectMockups({ desktop, mobile }) {
  const desktopImage = getImage(desktop);
  const mobileImage = getImage(mobile);

  return (
    <div className="w-full h-full lg:flex lg:flex-row-reverse items-center">
      {/* Desktop */}
      <figure className="m-0 lg:w-4/5 transform lg:-translate-y-6">
        <GatsbyImage
          image={desktopImage}
          alt="Project desktop view"
          className="rounded-xl"
          onDragStart={(e) => e.preventDefault()}
        />
        <figcaption className="text-center my-2 lg:hidden">
          desktop view
        </figcaption>
      </figure>
      {/* Mobile */}
      <figure className="m-0 pb-24 lg:pb-0 w-full lg:w-1/5 transform lg:translate-x-1/2 lg:translate-y-16">
        <GatsbyImage
          image={mobileImage}
          alt="Project mobile view"
          className="mx-auto block w-full"
          imgClassName="w-56 mx-auto"
          onDragStart={(e) => e.preventDefault()}
        />
        <figcaption className="text-center lg:hidden">mobile view</figcaption>
      </figure>
    </div>
  );
}
