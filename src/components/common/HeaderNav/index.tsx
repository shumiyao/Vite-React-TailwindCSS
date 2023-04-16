import React, { ReactElement } from 'react';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';

import { NavbarLinkBase } from '../../../lib/schema';

// https://larainfo.com/blogs/tailwind-css-navbar-ui-example
// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars

interface Props {
  menuItems?: NavbarLinkBase[];
  announcementBarMessage?: string;
}

const NavbarHeader = (props: Props = { menuItems: [], announcementBarMessage: '' }): ReactElement => {
  //   const value = useContext(AppContext);
  //   const { categories } = value;
  return (
    <>
      <div className='fixed w-full z-20 top-0 left-0 '>
        <AnnouncementBar
          message={
            props.announcementBarMessage || (
              <p className='uppercase text-sm tracking-widest text-center px-4 py-3 font-overpass'>
                <a href='https://cuckooparrot.forumeiros.com/' target='_blank' rel='noreferrer'>
                  Lançamos um fórum Para todos os artistas de Print on Demand. clique aqui para visitar!
                </a>
              </p>
            )
          }
        />
        <Navbar menuItems={props.menuItems || []} />
      </div>
    </>
  );
};
export default NavbarHeader;
