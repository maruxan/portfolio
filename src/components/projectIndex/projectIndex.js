import React from 'react';

import ProjectIndexTable from './projectIndexTable';

export default function ProjectIndex({ projects }) {
  return (
    <div className="min-h-screen w-full">
      <div className="w-11/12 mx-auto my-20 pr-2">
        <ProjectIndexTable projects={projects} />
      </div>
    </div>
  );
}
