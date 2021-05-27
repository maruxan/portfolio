import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutLayout() {
  const getAge = () => {
    const bday = new Date(1996, 11, 4);
    const today = new Date(Date.now());

    // Diference in millisecs
    const diff = today.getTime() - bday.getTime();
    // Difference in days
    const dayDiff = diff / (1000 * 60 * 60 * 24);
    // Difference in years
    const yearDiff = Math.abs(Math.round(dayDiff / 365.25));

    return yearDiff;
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
      <div className="py-6 lg:w-2/3">
        <p className="text-xl max-w-3xl">
          Hi, I'm Mauricio Garavaglia, {getAge()}
          <br />
          <br /> Sed arcu nunc, laoreet sodales lobortis quis, hendrerit sit
          amet neque. Sed sit amet neque non orci euismod tristique condimentum
          quis dolor. Donec eget quam scelerisque, interdum neque sit amet,
          elementum metus. Morbi consectetur tincidunt tortor, vel aliquam nulla
          egestas vitae. Sed sodales consectetur lacinia. Duis et ipsum erat.
          Aliquam tempus elit at magna egestas, nec tristique nisi sollicitudin.
          In id faucibus odio. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Aenean nec odio nisl.
          Pellentesque vulputate, dolor eu viverra pulvinar, felis massa
          pellentesque diam, non cursus dui dolor a enim. Morbi at nulla non ex
          fermentum lobortis sed et nulla. Ut porttitor ac nunc at commodo. Sed
          sodales libero diam, et pharetra lectus pulvinar sed. Vivamus vel ante
          vel velit pulvinar elementum.
          <br />
          <br /> Sed arcu nunc, laoreet sodales lobortis quis, hendrerit sit
          amet neque. Sed sit amet neque non orci euismod tristique condimentum
          quis dolor. Donec eget quam scelerisque, interdum neque sit amet,
          elementum metus. Morbi consectetur tincidunt tortor, vel aliquam nulla
          egestas vitae. Sed sodales consectetur lacinia. Duis et ipsum erat.
          Aliquam tempus elit at magna egestas, nec tristique nisi sollicitudin.
          In id faucibus odio. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Aenean nec odio nisl.
          Pellentesque vulputate, dolor eu viverra pulvinar, felis massa
          pellentesque diam, non cursus dui dolor a enim. Morbi at nulla non ex
          fermentum lobortis sed et nulla. Ut porttitor ac nunc at commodo. Sed
          sodales libero diam, et pharetra lectus pulvinar sed. Vivamus vel ante
          vel velit pulvinar elementum.
        </p>
      </div>
    </div>
  );
}
