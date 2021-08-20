import React from 'react';

import TechnolgyItem from './technolgyItem';

import {
  SiReact,
  SiTailwindcss,
  SiGatsby,
  SiWordpress,
  SiBootstrap,
  SiJavascript,
  SiSass,
  SiHtml5,
  SiFigma,
  SiRedux,
  SiFirebase,
} from 'react-icons/si';
import { FaElementor } from 'react-icons/fa';

const iconClasses = 'text-3xl mr-2';

const icons = {
  react: <SiReact className={iconClasses} />,
  tailwindcss: <SiTailwindcss className={iconClasses} />,
  gatsbyjs: <SiGatsby className={iconClasses} />,
  wordpress: <SiWordpress className={iconClasses} />,
  bootstrap: <SiBootstrap className={iconClasses} />,
  javascript: <SiJavascript className={iconClasses} />,
  sass: <SiSass className={iconClasses} />,
  html: <SiHtml5 className={iconClasses} />,
  figma: <SiFigma className={iconClasses} />,
  redux: <SiRedux className={iconClasses} />,
  firebase: <SiFirebase className={iconClasses} />,
  elementor: <FaElementor className={iconClasses} />,
};

export default function Technologies({ technologies }) {
  return (
    <div className="flex flex-col md:flex-row">
      {technologies.map((t) => (
        <TechnolgyItem key={t} tech={t}>
          {icons[t]}
        </TechnolgyItem>
      ))}
    </div>
  );
}
