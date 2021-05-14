import React from 'react';
import { useSpringCarousel } from 'react-spring-carousel-js';

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
];

export default function ProjectsWrapper() {
  // Carousel items array
  let items = [
    {
      id: `ProjectItem-${1}`,
      renderItem: <ProjectGalleryItem project={projects[0]} />,
    },
    {
      id: `ProjectItem-${2}`,
      renderItem: <ProjectGalleryItem project={projects[1]} />,
    },
  ];

  // Carousel constructor
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({ withLoop: true, items: items });

  return (
    <div>
      <ProjectGallery>{carouselFragment}</ProjectGallery>
      <ProjectNavBar
        slideToNext={slideToNextItem}
        slideToPrev={slideToPrevItem}
      />
    </div>
  );
}
