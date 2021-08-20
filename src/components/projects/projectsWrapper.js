import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel-js';
import { config } from 'react-spring';

import ProjectNavBar from './projectNavigation/projectsNavBar';
import ProjectGallery from './projectGallery/projectGallery';
import ProjectGalleryItem from './projectGallery/projectGalleryItem';
import ProjectIndex from './projectIndex/projectIndex';

/**
 * Contains the project views and it's navigation
 */
export default function ProjectsWrapper({ projects }) {
  const [currentView, setCurrentView] = useState('gallery');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Maps projects to carousel items
  const getProjectsCarouselItems = () => {
    const items = projects.map((project, index) => ({
      id: `ProjectItem-${index}`,
      renderItem: <ProjectGalleryItem project={project} />,
    }));

    return items;
  };

  // Carousel constructor
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    withLoop: true,
    items: getProjectsCarouselItems(),
    springConfig: config.slow,
  });

  // Update current item index on slide change
  useListenToCustomEvent((data) => {
    if (data.eventName === 'onSlideStartChange') {
      // console.log(data);
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
    <div className="max-w-screen max-h-screen">
      {currentView === 'gallery' && (
        <ProjectGallery>{carouselFragment}</ProjectGallery>
      )}
      {currentView === 'index' && (
        <ProjectIndex projects={projects} slideToItem={goToProject} />
      )}
      <ProjectNavBar
        slideToNext={slideToNextItem}
        slideToPrev={slideToPrevItem}
        totalProjectsCount={projects.length}
        currentProjectIndex={currentItemIndex}
        switchView={switchView}
        currentView={currentView}
      />
    </div>
  );
}
