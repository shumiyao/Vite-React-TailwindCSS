import React, { ReactElement, useState, useEffect, useContext } from 'react';
import AppContext from '@/lib/AppContext';
import NavbarLinks from './NavbarLinks';
import { Link } from '@/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavbarLinkBase } from '../../../lib/schema';

import LogoImage from '@/assets/images/ci/logo.png';

interface NavbarHeaderProps {
  menuItems?: NavbarLinkBase[];
  message?: string;
}

const NavbarHeader = (props: NavbarHeaderProps = { menuItems: [] }): ReactElement => {
  const value = useContext(AppContext);
  const { state } = value;
  //   const value = useContext(AppContext);
  //   const { categories } = value;
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    function closeMenu(e) {
      if (e.target.tagName !== 'SPAN') {
        setNavbarOpen(false);
      }
    }
    document.addEventListener('mousedown', closeMenu);
    window.addEventListener('resize', closeMenu);
    return () => {
      window.removeEventListener('resize', closeMenu);
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [setNavbarOpen]);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-cuckoo-yellow text-gray-700 drop-shadow-lg font-staatliches'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            {/* Logo */}
            <Link to='/' className='flex items-baseline mx-auto md:mx-0 '>
              <img src={LogoImage} alt='' className='h-24 w-24' />
              {/* <span className='ml-12 self-center whitespace-nowrap font-semibold hidden xl:block xl:text-4xl font-symphonyRegular text-cuckoo-brown'>CuckooParrot Design Agency</span> */}
            </Link>

            {/* Hambuger Menu */}
            <button className=' cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none' type='button' onClick={() => setNavbarOpen(!navbarOpen)}>
              <FontAwesomeIcon icon={faBars} className='h-6' />
            </button>
          </div>
          <div className={'lg:flex flex-grow bg-white lg:bg-transparent rounded items-center' + (navbarOpen ? ' flex absolute rounded drop-shadow-lg w-auto p-6 top-16 right-2' : ' hidden')}>
            {/* Menu Links */}
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto text-2xl lg:text-3xl text-cuckoo-brown'>
              {props.menuItems ? (
                props.menuItems.map((element, idx) => {
                  return <NavbarLinks key={'navbar-link-' + idx} label={element.label} href={element.href} dropdown={element.dropdown || []} target={element.target || ''} />;
                })
              ) : (
                <>
                  <NavbarLinks key={'navbar-link-99'} label={'No Links'} href={'#'} dropdown={[]} />
                </>
              )}
              <NavbarLinks key={'navbar-link-cart'} label={`<i className='w-4 fa-solid fa-bag-shopping'></i><span className='ml-4  lg:hidden'>Cesto</span>`} href={'/cart'} dropdown={null} badgeLabel={state.cart.length > 0 ? String(state.cart.length) : ''} badgeClassName={'text-white text-sm font-medium px-2.5 py-0.5 rounded-full ml-5 ' + (state.cart.length > 0 ? 'bg-green-500' : '')} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarHeader;
