import * as React from 'react';
import { useProjects } from '../hooks/useProjects';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';
import ProjectsWrapper from '../components/projects/projectsWrapper';

const IndexPage = () => {
  const projects = useProjects();

  return (
    <Layout>
      <Seo title="/projects" />
      <ProjectsWrapper projects={projects} />
    </Layout>
  );
};

export default IndexPage;
