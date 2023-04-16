import React, { ReactElement } from 'react';
import parse from 'html-react-parser';
interface Props {
  message?: ReactElement | string;
}

function AnnouncementBar(props: Props): ReactElement {
  return (
    <nav className='bg-white'>
      <div className='bg-gray-700 text-gray-100  mx-auto'>{typeof props.message === 'string' ? <p className='uppercase text-sm tracking-widest text-center px-4 py-3 font-overpass'>{parse(props.message || '')}</p> : <>{props.message}</>}</div>
    </nav>
  );
}

export default AnnouncementBar;
