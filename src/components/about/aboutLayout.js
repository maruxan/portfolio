import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutLayout() {
  return (
    <div className="pt-20 px-[4vw] lg:flex relative lg:justify-end">
      <div className="pt-6 md:flex lg:flex-col justify-between lg:fixed top-20 left-[4vw] bottom-[4vw] max-h-screen inset-0 lg:w-1/4">
        <h1 className="text-6xl">About me</h1>
        <StaticImage
          src="../../images/face.jpg"
          alt="yo boi"
          className="py-6 w-full md:max-w-xs"
        />
      </div>
      <div className="py-6 lg:w-2/3">
        <p className="text-xl max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium
          sapien aliquet nisi sagittis aliquet. Curabitur a sodales enim.
          Curabitur dapibus dolor vel ultrices cursus. Aenean id lacus
          tincidunt, fringilla dolor id, vehicula turpis. Etiam consectetur
          congue neque a sollicitudin. Vivamus mattis urna vel ornare pulvinar.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          est quam, eu vehicula mi interdum at. Vivamus felis tortor, volutpat
          sed purus a, placerat consectetur turpis. Phasellus at lacinia mi.
          Aenean quis enim leo. In pellentesque bibendum placerat. Donec
          vestibulum sem et nulla viverra, in ullamcorper nibh luctus.
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
