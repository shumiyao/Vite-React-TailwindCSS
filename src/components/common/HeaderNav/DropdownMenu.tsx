import React, { ReactElement } from 'react';

interface Props {
  message?: ReactElement;
}

// ref https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/vue/dropdown
// https://popper.js.org/

function AnnouncementBar(props: Props): ReactElement {
  return (
    <nav className='bg-white'>
      <div className='bg-gray-700 text-gray-100  mx-auto'>
        <p className='uppercase tracking-widest text-center px-4 py-3 font-overpass'>{props.message}</p>
      </div>
    </nav>
  );
}

export default AnnouncementBar;
