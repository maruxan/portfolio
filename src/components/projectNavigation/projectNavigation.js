import React from 'react';

export default function ProjectNavigation({ slideToNext, slideToPrev }) {
  const keyPressHandler = (event) => {
    console.log(event.key);
  };

  return (
    <div className="flex justify-end items-center text-xl text-gray-500 w-2/3">
      <div
        className="hidden md:block transition hover:text-gray-900 hover:shadow-md active:shadow-inner px-3 py-2 rounded-lg"
        role="button"
        tabIndex="0"
        onClick={slideToPrev}
        onKeyPress={keyPressHandler}>
        <div className="min-w-max">{'<--'} prev</div>
      </div>

      {/* the width of the line should represent the slider time */}
      <div className="hidden md:block flex-grow h-2 w-full mx-6 bg-gray-100 shadow-inner rounded-lg"></div>

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
