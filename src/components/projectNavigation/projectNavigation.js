import React, { useCallback } from 'react';
import { useSpring, a, config } from 'react-spring';

export default function ProjectNavigation({
  slideToNext,
  slideToPrev,
  totalProjects,
  currentProject,
}) {
  const keyPressHandler = (event) => {
    console.log(event.key);
  };

  // Returns the translate value of the fill bar
  // that indicates the current project
  const currentProjectBarWidth = useCallback(() => {
    const projectBarUnitWidth = 100 / totalProjects;
    const currentItem = currentProject;

    // The translation value should be negative so the bar moves to the left,
    // where -100 indicates a full left translation and 0 equals a fully filled bar
    const xTranslateValue = Math.round(
      -100 + currentItem * projectBarUnitWidth
    );

    // console.log(xTranslateValue);
    return `${xTranslateValue}%`;
  }, [totalProjects, currentProject]);

  // Fill bar spring animation
  const { x } = useSpring({
    x: currentProjectBarWidth(),
    config: config.slow,
  });

  return (
    <div className="flex justify-end items-center text-xl text-gray-500 w-2/3">
      {/* previous item */}
      <div
        className="hidden md:block transition hover:text-gray-900 hover:shadow-md active:shadow-inner px-3 py-2 rounded-lg"
        role="button"
        tabIndex="0"
        onClick={slideToPrev}
        onKeyPress={keyPressHandler}>
        <div className="min-w-max">{'<--'} prev</div>
      </div>

      {/* current project feedback bar */}
      <div className="hidden md:block flex-grow h-2 w-full mx-6 bg-gray-100 shadow-inner rounded-lg overflow-hidden relative">
        <a.div
          className="absolute left-0 top-0 h-full rounded-lg shadow-inner bg-gray-700 w-full"
          style={{ x }}></a.div>
      </div>

      {/* next item */}
      <div
        className="transition hover:text-gray-900 hover:shadow-md active:shadow-inner px-3 py-2 rounded-lg"
        role="button"
        tabIndex="0"
        onClick={slideToNext}
        onKeyPress={keyPressHandler}>
        <div className="min-w-max">next {'-->'}</div>
      </div>
    </div>
  );
}
