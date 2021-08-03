import * as React from 'react';
import { graphql } from 'gatsby';

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
    desktopMockup: '/marq-desktop.png',
    mobileMockup: '/marq-mobile.png',
  },
  {
    name: 'Project name 3',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwindcss', 'gatsbyjs'],
    url: 'www.google.com',
    desktopMockup: '/marq-desktop.png',
    mobileMockup: '/marq-mobile.png',
  },
  {
    name: 'Project name 4',
    category: 'Project sub',
    description: 'Project description',
    technologies: ['react', 'tailwindcss', 'gatsbyjs'],
    url: 'www.google.com',
    desktopMockup: '/marq-desktop.png',
    mobileMockup: '/marq-mobile.png',
  },
];

const IndexPage = ({ data }) => {
  const [projectsWithImages, setProjectsWithImages] = React.useState([]);

  /**
   * Extracts image from query data
   *
   * @param  {} fileName
   */
  const getImage = (fileName) => {
    return data.allFile.edges.find(
      (image) =>
        image.node.absolutePath.replace(image.node.dir, '') === fileName
    );
  };

  /**
   * Load images to projects on page load
   */
  React.useEffect(() => {
    const pwi = projects.map((project) => {
      return {
        ...project,
        desktopMockup: getImage(project.desktopMockup),
        mobileMockup: getImage(project.mobileMockup),
      };
    });

    setProjectsWithImages(pwi);
  }, []);

  return (
    <Layout>
      <Seo title="/projects" />
      <ProjectsWrapper projects={projects} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectImages {
    allFile {
      edges {
        node {
          dir
          absolutePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default IndexPage;
