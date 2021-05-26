import * as React from 'react';

import Layout from '../components/layout/layout';
import Seo from '../components/seo/seo';
import AboutLayout from '../components/about/aboutLayout';

const AboutPage = () => (
  <Layout>
    <Seo title="/about" />
    <AboutLayout />
  </Layout>
);

export default AboutPage;
