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
          <th className="border-b border-gray-900 w-full">name</th>
          <th className="border-b border-gray-900">technologies</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr
            className="transition transform hover:shadow-xl hover:scale-[1.02] rounded-xl group"
            onMouseEnter={() => showMockupOnHover('enter', project)}
            onMouseLeave={() => showMockupOnHover('leave', null)}
            role="button"
            tabIndex="0"
            onClick={() => slideToItem(index)}
            onKeyPress={keyPressHandler}
            key={index}>
            <td className="transition group-hover:border-transparent text-2xl py-4 cursor-pointer">
              <div>{project.name}</div>
            </td>
            <td className="transition align-middle group-hover:border-transparent">
              <Technologies technologies={project.technologies} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
