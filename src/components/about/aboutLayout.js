import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutLayout() {
  const getYearDiff = (date1, date2) => {
    // Diference in millisecs
    const diff = date1.getTime() - date2.getTime();
    // Difference in days
    const dayDiff = diff / (1000 * 60 * 60 * 24);
    // Difference in years
    const yearDiff = Math.abs(Math.round(dayDiff / 365.25));

    return yearDiff;
  };

  // Current age
  const getAge = () => {
    // Fix getYearDiff functionality
    const bday = new Date(1997, 11, 4);
    const today = new Date(Date.now());

    return getYearDiff(today, bday);
  };

  // Years of experience
  const getExpYrs = () => {
    const start = new Date(2019, 0, 1);
    const today = new Date(Date.now());

    return getYearDiff(today, start);
  };

  return (
    <div className="pt-20 px-[4vw] lg:flex relative lg:justify-end">
      <div className="pt-6 md:flex lg:flex-col justify-between lg:fixed top-20 left-[4vw] bottom-[4vw] max-h-screen inset-0 lg:w-1/4">
        <h1 className="text-6xl">About me</h1>
        <StaticImage
          src="../../images/me.jpg"
          alt="yo boi"
          className="py-6 w-full md:max-w-xs"
        />
      </div>
      <div className="py-6 lg:w-2/3 flex flex-col justify-between">
        <div className="text-xl max-w-3xl">
          <p>
            Hi, I'm Mauricio Garavaglia, {getAge()} years old front-end
            developer based in Resistencia, Argentina.
          </p>
          <p>
            I studied programming at UTN (Universidad Tecnológica Nacional) in
            Resistencia, Argentina. For the past {getExpYrs()} years I've been
            self-teaching web development, keeping up with the latest
            technologies and working as a freelance in{' '}
            <a
              href="https://www.instagram.com/estudioliba/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline active:italic">
              Estudio Liba
            </a>
            , creating clean, modern and responsive web user interfaces.
          </p>
          <h3 className="mb-2 text-xl">skills</h3>
          <p>
            easy learner autodidact, familiar with design principles and best
            practices, logical approach in problem solving, object oriented
            programming
          </p>
          <h3 className="mb-2 text-xl">
            technologies that I enjoy working with
          </h3>
          <p>
            javascript, React.js, redux, GatsbyJS, git, webpack, node.js,
            Tailwind CSS, bootstrap, sass, Figma
          </p>
          <h3 className="mb-2 text-xl">
            technologies that I'm looking foward to learn
          </h3>
          <p>Vue.js, GraphQL, typescript, mongoDB, firebase, AWS</p>
        </div>
        <div className="mt-12 md:flex">
          <div>
            <h3 className="mb-2 text-xl">contact info</h3>
            <ul className="m-0">
              <li className="mb-1">
                <a
                  href="https://snowy-poppyseed-5c7.notion.site/Resume-10c3cf7e2b714a35b97a42f85da64844"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline active:italic">
                  resume
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://github.com/maruxan"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline active:italic">
                  github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mauricio-garavaglia/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline active:italic">
                  linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
