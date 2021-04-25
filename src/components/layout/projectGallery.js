import React from 'react';

import { AiOutlineExport } from 'react-icons/ai';
import Technologies from '../ui/technologies';

export default function ProjectGallery({ projects }) {
  return (
    <div className="min-h-screen min-w-full py-20 flex items-center">
      {projects.map((project, index) => (
        <ProjectGalleryItem project={project} key={index} />
      ))}
    </div>
  );
}

function ProjectGalleryItem({ project }) {
  return (
    <div className="h-full w-screen pl-[4vw]">
      <div className="w-full flex">
        {/* project description */}
        <div>
          <h1>{project.name}</h1>
          <p>{project.category}</p>
          <p>{project.description}</p>
          <h3>technologies</h3>
          <Technologies technologies={project.technologies} />
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center max-w-max hover:underline active:italic">
            <div>visit site</div>
            <AiOutlineExport className="ml-3" />
          </a>
        </div>
        {/* project mockups */}
        <div></div>
      </div>
    </div>
  );
}
