import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel-js';
import { config } from 'react-spring';

import ProjectNavBar from '../projectNavigation/projectsNavBar';
import ProjectGallery from '../projectGallery/projectGallery';
import ProjectGalleryItem from '../projectGallery/projectGalleryItem';

const projects = [
  {
    name: 'Project name',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwind', 'gatsby'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
  {
    name: 'Project name 2',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwind', 'gatsby'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
  {
    name: 'Project name 3',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwind', 'gatsby'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
  {
    name: 'Project name 4',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwind', 'gatsby'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
];

export default function ProjectsWrapper() {
  const [currentView, setCurrentView] = useState('gallery');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Carousel items array
  const items = projects.map((project, index) => ({
    id: `ProjectItem-${index}`,
    renderItem: <ProjectGalleryItem project={project} />,
  }));

  // Carousel constructor
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    withLoop: true,
    items: items,
    springConfig: config.slow,
  });

  // Update current item index on slide change
  useListenToCustomEvent((data) => {
    if (data.eventName === 'onSlideStartChange') {
      console.log(data);
      setCurrentItemIndex(data.nextItem);
    }
  });

  // Switch view
  const switchView = (view) => {
    setCurrentView(view);
  };

  let view = <ProjectGallery>{carouselFragment}</ProjectGallery>;
  if (currentView === 'index') view = null;

  return (
    <div>
      {view}
      <ProjectNavBar
        slideToNext={slideToNextItem}
        slideToPrev={slideToPrevItem}
        totalProjectsCount={items.length}
        currentProjectIndex={currentItemIndex}
        switchView={switchView}
        currentView={currentView}
      />
    </div>
  );
}
