import React, { useState } from 'react';
import { useHover } from '@react-aria/interactions';

export default function TechnolgyItem({ children, tech }) {
  const [showLabel, setShowLabel] = useState(false);

  const { hoverProps, isHovered } = useHover({
    onHoverStart: (e) => setShowLabel(true),
    onHoverEnd: (e) => setShowLabel(false),
  });

  return (
    <div {...hoverProps} className="relative">
      <div
        className="absolute left-1/2 -top-7 transform -translate-x-1/2 bg-black text-gray-100 text-xs w-max p-1 rounded-sm"
        hidden={!showLabel}>
        {tech}
      </div>
      <span className="sr-only">{tech}</span>
      {children}
    </div>
  );
}
