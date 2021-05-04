import React from 'react';

export default function Contact() {
  return (
    <div className="text-right mb-6">
      <p className="text-3xl">
        let's work
        <br />
        together
      </p>
      <nav>
        <ul className="md:text-xl">
          <li>
            <a
              href="tel:+543624038992"
              className="hover:underline active:italic">
              +54 362 4038992
            </a>
          </li>
          <li>
            <a
              href="mailto:garavagliamauricio@gmail.com"
              className="hover:underline active:italic">
              garavagliamauricio@gmail.com
            </a>
          </li>
          <li>
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
      </nav>
    </div>
  );
}
