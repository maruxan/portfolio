import React from 'react';

import ProjectViewSwitch from './projectViewSwitch';
import ProjectNavigation from './projectNavigation';

export default function ProjectNavBar({
  slideToNext,
  slideToPrev,
  totalProjectsCount,
  currentProjectIndex,
  switchView,
  currentView,
}) {
  let navigation = null;
  if (currentView === 'gallery') {
    navigation = (
      <ProjectNavigation
        slideToNext={slideToNext}
        slideToPrev={slideToPrev}
        totalProjects={totalProjectsCount}
        currentProject={currentProjectIndex + 1}
      />
    );
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-50 h-20 flex items-center">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <ProjectViewSwitch switchView={switchView} currentView={currentView} />
        {navigation}
      </div>
    </div>
  );
}
