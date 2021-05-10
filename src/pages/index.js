import * as React from 'react';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';
import ProjectNavBar from '../components/projectNavigation/projectsNavBar';
import ProjectGallery from '../components/projectGallery/projectGallery';

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
];

const IndexPage = () => (
  <Layout>
    <Seo title="/projects" />
    <ProjectGallery projects={projects} />
    <ProjectNavBar />
  </Layout>
);

export default IndexPage;
