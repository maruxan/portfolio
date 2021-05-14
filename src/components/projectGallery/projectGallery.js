import React, { useEffect } from 'react';

export default function ProjectGallery({ children }) {
  return (
    <div className="min-h-screen min-w-full relative flex items-center">
      {children}
    </div>
  );
}
