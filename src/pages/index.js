import * as React from 'react';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';
import ProjectsWrapper from '../components/projectsWrapper/projectsWrapper';

const IndexPage = () => (
  <Layout>
    <Seo title="/projects" />
    <ProjectsWrapper />
  </Layout>
);

export default IndexPage;
