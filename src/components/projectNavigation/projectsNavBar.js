import React from 'react';

import ProjectViewSwitch from './projectViewSwitch';
import ProjectNavigation from './projectNavigation';

export default function ProjectNavBar() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-50 h-20 flex items-center">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <ProjectViewSwitch />
        <ProjectNavigation />
      </div>
    </div>
  );
}
