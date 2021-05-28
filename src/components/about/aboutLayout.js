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
    const bday = new Date(1996, 11, 4);
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
            Tailwind CSS, bootstrap, sass
          </p>
          <h3 className="mb-2 text-xl">
            technologies that I'm looking foward to learn
          </h3>
          <p>Vue.js, GraphQL, typescript, mongoDB, firebase, testing</p>
        </div>
        <div
          className="text-2xl md:text-3xl mt-12 hover:underline active:italic"
          role="button">
          {"let's work together -->"}
        </div>
      </div>
    </div>
  );
}
