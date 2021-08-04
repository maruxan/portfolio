import { useStaticQuery, graphql } from 'gatsby';

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

/**
 * Returns an array of projects with images
 * ready to use with GatsbyImage
 */
export const useProjects = () => {
  // Query for images
  const data = useStaticQuery(
    graphql`
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
    `
  );

  /**
   * Extracts image from query data
   * @param  {} fileName
   */
  const getImage = (fileName) => {
    const { node } = data.allFile.edges.find(
      ({ node }) => node.absolutePath.replace(node.dir, '') === fileName
    );

    return node;
  };

  const projectsWithImages = projects.map((project) => {
    return {
      ...project,
      desktopMockup: getImage(project.desktopMockup),
      mobileMockup: getImage(project.mobileMockup),
    };
  });

  return projectsWithImages;
};
