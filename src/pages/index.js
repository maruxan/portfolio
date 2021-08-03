import * as React from 'react';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';
import ProjectsWrapper from '../components/projects/projectsWrapper';

const projects = [
  {
    name: 'Project name',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwindcss', 'gatsbyjs'],
    url: 'https://www.google.com',
    desktopMockup: '/marq-desktop.png',
    mobileMockup: '/marq-mobile.png',
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

const IndexPage = () => (
  <Layout>
    <Seo title="/projects" />
    <ProjectsWrapper projects={projects} />
  </Layout>
);

export default IndexPage;
