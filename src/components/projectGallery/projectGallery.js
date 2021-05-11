import React from 'react';

import ProjectGalleryItem from './projectGalleryItem';

export default function ProjectGallery({ projects }) {
  return (
    <div className="min-h-screen min-w-full relative">
      {projects.map((project, index) => (
        <ProjectGalleryItem project={project} key={index} />
      ))}
    </div>
  );
}
