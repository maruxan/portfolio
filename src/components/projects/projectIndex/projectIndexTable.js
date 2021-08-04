import React from 'react';

import Technologies from '../../ui/technologies';
import { BsArrowReturnRight } from 'react-icons/bs';

export default function ProjectIndexTable({
  projects,
  showMockupOnHover,
  slideToItem,
}) {
  const keyPressHandler = (event) => {
    console.log(event.key);
  };

  return (
    <table className="block table-fixed w-full py-6">
      <thead>
        <tr>
          <th className="border-b border-gray-900 w-3/4">name</th>
          <th className="border-b border-gray-900 w-full">technologies</th>
          <th className="text-right border-b border-gray-900">visit</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr
            className="transition transform hover:shadow-xl hover:scale-[1.02] rounded-xl group"
            onMouseEnter={() => showMockupOnHover('enter', project)}
            onMouseLeave={() => showMockupOnHover('leave', null)}
            key={index}>
            <td className="transition group-hover:border-transparent md:text-2xl py-4 cursor-pointer">
              <div
                role="button"
                tabIndex="0"
                onClick={() => slideToItem(index)}
                onKeyPress={keyPressHandler}>
                {project.name}
              </div>
            </td>
            <td className="transition align-middle group-hover:border-transparent">
              <Technologies technologies={project.technologies} />
            </td>
            <td className="transition group-hover:border-transparent">
              <a
                href={project.url}
                className="block border py-2 rounded-full shadow-inner hover:bg-gray-100">
                <BsArrowReturnRight className="mx-auto" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
