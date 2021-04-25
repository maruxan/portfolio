import React from 'react';

import ProjectView from '../navigation/projectView';

export default function ProjectNavBar() {
  return (
    <div className="fixed bottom-0 w-full bg-gray-100 h-20 flex items-center">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <ProjectView />
      </div>
    </div>
  );
}
