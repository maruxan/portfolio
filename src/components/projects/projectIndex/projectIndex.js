import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { a, useSpring } from 'react-spring';

import ProjectIndexTable from './projectIndexTable';

export default function ProjectIndex({ projects, slideToItem }) {
  const [currentProject, setCurrentProject] = useState();
  const [showMockup, setShowMockup] = useState(false);

  // Shows the mockup of the current hovered project on the table
  const projectHoverHandler = (eventType, projectIndex) => {
    setCurrentProject(projectIndex);

    if (eventType === 'enter') setShowMockup(true);
    else if (eventType === 'leave') setShowMockup(false);
  };

  const spring = useSpring({
    to: { opacity: showMockup ? 1 : 0, y: showMockup ? 0 : 20 },
    from: { opacity: 0, y: 20 },
  });

  return (
    <div className="h-full w-full">
      <div className="w-11/12 mx-auto my-20 pr-2 flex">
        <a.div className="w-1/4 h-full sticky hidden lg:block" style={spring}>
          <StaticImage
            src="../../../images/marq-mobile.png"
            alt="Project mobile view"
            className={`w-full mx-auto block absolute top-6 right-6`}
            onDragStart={(e) => e.preventDefault()}
          />
        </a.div>
        <ProjectIndexTable
          projects={projects}
          onHover={projectHoverHandler}
          slideToItem={slideToItem}
        />
      </div>
    </div>
  );
}
