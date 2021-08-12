import React from 'react';
import { useSpring, animated } from 'react-spring';

import { BsArrowReturnRight } from 'react-icons/bs';
import Technologies from '../../ui/technologies';
import ProjectMockups from './projectMockups';

export default function ProjectGalleryItem({ project }) {
  // Animation
  const spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div
      style={spring}
      className="w-full h-full m-0 inset-0 pt-20 lg:pb-20">
      <div className="w-screen h-full lg:flex items-center px-[4vw]">
        {/* project description */}
        <div className="my-6 lg:w-1/3">
          <h1 className="mb-3">{project.name}</h1>
          <p className="mb-2 text-sm">{project.category}</p>
          <p className="text-gray-500 text-lg mb-6">{project.description}</p>
          <h3 className="text-base mb-2">technologies</h3>
          <Technologies technologies={project.technologies} />
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center max-w-max hover:underline active:italic mt-6 text-base">
            <div>visit site</div>
            <BsArrowReturnRight className="ml-3 mt-1" />
          </a>
        </div>
        {/* project mockups */}
        <ProjectMockups
          desktop={project.desktopMockup}
          mobile={project.mobileMockup}
        />
      </div>
    </animated.div>
  );
}
