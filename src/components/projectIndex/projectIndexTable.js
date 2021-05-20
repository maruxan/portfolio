import React from 'react';
import { Link } from 'gatsby';

import Technologies from '../ui/technologies';
import { BsArrowReturnRight } from 'react-icons/bs';

export default function ProjectIndexTable({ projects }) {
  return (
    <div className="table-fixed">
      <thead>
        <tr>
          <th className="border-b border-gray-900 w-3/4">name</th>
          <th className="border-b border-gray-900 w-full">technologies</th>
          <th className="text-right border-b border-gray-900">visit</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr className="transition transform hover:shadow-xl hover:scale-[1.02] rounded-xl group">
            <td className="transition group-hover:border-transparent md:text-2xl py-4">
              {project.name}
            </td>
            <td className="transition align-middle group-hover:border-transparent">
              <Technologies technologies={project.technologies} />
            </td>
            <td className="transition group-hover:border-transparent">
              <Link
                to={project.url}
                className="block border py-2 rounded-full shadow-inner hover:bg-gray-100">
                <BsArrowReturnRight className="mx-auto" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
