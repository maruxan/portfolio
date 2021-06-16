import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel-js';
import { config } from 'react-spring';

import ProjectNavBar from '../projectNavigation/projectsNavBar';
import ProjectGallery from '../projectGallery/projectGallery';
import ProjectGalleryItem from '../projectGallery/projectGalleryItem';
import ProjectIndex from '../projectIndex/projectIndex';

const projects = [
  {
    name: 'Project name',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwindcss', 'gatsbyjs'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
  {
    name: 'Project name 2',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwindcss', 'gatsbyjs'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
  {
    name: 'Project name 3',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwindcss', 'gatsbyjs'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
  {
    name: 'Project name 4',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwindcss', 'gatsbyjs'],
    url: 'www.google.com',
    desktopMockup: '',
    mobileMockup: '',
  },
];

/**
 * Contains the project views and it's navigation
 */
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

  // Receives the view as a string ('gallery' or 'index') and switches the view
  const switchView = (view) => {
    setCurrentView(view);
  };

  // Slide to project from index view to gallery view
  const goToProject = (index) => {
    setTimeout(() => {
      // Without the delay the carousel won't slide
      slideToItem(index);
    }, 50);

    setCurrentView('gallery');
  };

  return (
    <div>
      {currentView === 'gallery' && (
        <ProjectGallery>{carouselFragment}</ProjectGallery>
      )}
      {currentView === 'index' && (
        <ProjectIndex projects={projects} slideToItem={goToProject} />
      )}
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
