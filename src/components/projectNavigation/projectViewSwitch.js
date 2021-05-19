import React from 'react';

export default function ProjectViewSwitch({ currentView, switchView }) {
  const keyPressHandler = (event) => {
    console.log(event.key);
  };

  return (
    <div className="flex text-gray-500 text-xl">
      <div role="button" tabIndex="0" onKeyPress={keyPressHandler}>
        onClick={() => switchView('gallery')}
        className=
        {`hover:text-gray-900 ${
          currentView === 'gallery' ? 'text-gray-900' : ''
        } `}
        > gallery
      </div>
      <div className="mx-2">/</div>
      <div role="button" tabIndex="0" onKeyPress={keyPressHandler}>
        onClick={() => switchView('index')}
        className=
        {`hover:text-gray-900 ${
          currentView === 'index' ? 'text-gray-900' : ''
        } `}
        > index
      </div>
    </div>
  );
}
