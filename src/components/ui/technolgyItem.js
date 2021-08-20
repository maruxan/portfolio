import React from 'react';
import { useHover } from '@react-aria/interactions';

export default function TechnolgyItem({ children, tech }) {
  const { hoverProps, isHovered } = useHover({
    onHoverStart: null,
    onHoverEnd: null,
  });

  return (
    <div {...hoverProps} className="relative m-1">
      <div
        className="absolute left-1/2 -top-7 transform -translate-x-1/2 bg-black text-gray-100 text-xs w-max p-1 rounded-sm"
        hidden={!isHovered}>
        {tech}
      </div>
      <span className="sr-only">{tech}</span>
      <div className="flex items-center">
        {children}
        <span className="ml-2 md:hidden">{tech}</span>
      </div>
    </div>
  );
}
