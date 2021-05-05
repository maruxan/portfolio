import React from 'react';

import { AiOutlineExport } from 'react-icons/ai';
import Technologies from '../ui/technologies';
import ProjectMockups from '../ui/projectMockups';

export default function ProjectGallery({ projects }) {
  return (
    <div className="min-h-screen min-w-full relative">
      {projects.map((project, index) => (
        <ProjectGalleryItem project={project} key={index} />
      ))}
    </div>
  );
}

function ProjectGalleryItem({ project }) {
  return (
    <div className="w-full h-full m-0 absolute inset-0 py-20">
      <div className="w-full h-full lg:flex items-center">
        {/* project description */}
        <div className="my-6 pl-[4vw] lg:w-1/3">
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
        <ProjectMockups />
      </div>
    </div>
  );
}
