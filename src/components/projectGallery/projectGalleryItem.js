import React from 'react';
import { useSpring, animated } from 'react-spring';

import { AiOutlineExport } from 'react-icons/ai';
import Technologies from '../ui/technologies';
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
          <h1>{project.name}</h1>
          <p>{project.category}</p>
          <p>{project.description}</p>
          <h3>technologies</h3>
          <Technologies technologies={project.technologies} />
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center max-w-max hover:underline active:italic mt-4">
            <div>visit site</div>
            <AiOutlineExport className="ml-3" />
          </a>
        </div>
        {/* project mockups */}
        <ProjectMockups />
      </div>
    </animated.div>
  );
}
