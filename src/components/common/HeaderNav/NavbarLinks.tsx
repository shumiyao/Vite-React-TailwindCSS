import React, { ReactElement, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import parse from 'html-react-parser';
import { Link } from '@/router';

import { NavbarLinkProps } from '../../../lib/schema';

// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
// https://popper.js.org/
// https://popper.js.org/react-popper/

const slugify = require('slugify');

const NavbarLink = (props: NavbarLinkProps): ReactElement => {
  return (
    <>
      {props.target ? (
        <a className='px-0 lg:px-3 py-2 flex items-center uppercase font-bold hover:text-orange-500 hover:opacity-75' href={props.href} target={props.target} rel='noreferrer'>
          <span className={'ml-0 lg:ml-2'}>{parse(props.label)}</span>
          {typeof props.badgeLabel !== 'undefined' && <span className={props.badgeClassName || ''}>{props.badgeLabel}</span>}
        </a>
      ) : (
        <Link className='px-0 lg:px-3 py-2 flex items-center uppercase font-bold hover:text-orange-500 hover:opacity-75' href={props.href}>
          <span className={'ml-0 lg:ml-2'}>{parse(props.label)}</span>
          {typeof props.badgeLabel !== 'undefined' && <span className={props.badgeClassName || ''}>{props.badgeLabel}</span>}
        </Link>
      )}
    </>
  );
};

const NavbarDropDown = (props: NavbarLinkProps): ReactElement => {
  const [show, setShow] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  function handleDropdownClick(event) {
    setShow(!show);
  }

  useEffect(() => {
    function handleDocumentClick(event) {
      if ((referenceElement && referenceElement.contains(event.target)) || (popperElement && popperElement.contains(event.target))) {
        return;
      }
      setShow(false);
    }
    // listen for clicks and close dropdown on body
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [setShow, referenceElement, popperElement]);

  return (
    <>
      <div className='relative inline-flex align-middle w-full'>
        <button onClick={handleDropdownClick} className='  uppercase  px-0 lg:px-6 py-2 mr-1  ease-linear transition-all duration-150 hover:text-orange-500' type='button' ref={setReferenceElement}>
          {parse(props.label)}
        </button>
        {show && (
          <div className='bg-gray-100 border  z-50 float-left py-2 list-none text-left rounded border-gray-200 shadow-lg mt-2 !m-0' style={styles.popper} ref={setPopperElement} {...attributes.popper}>
            {props.dropdown &&
              props.dropdown.map((e) => (
                <Link key={'dropdown-menu-' + slugify(e.label)} href={e.href} className=' py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 hover:text-orange-500'>
                  {parse(e.label)}
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

const NavbarLinks = (props: NavbarLinkProps): ReactElement => {
  return <li className='nav-item'>{props.dropdown && props.dropdown.length > 0 ? <NavbarDropDown href={props.href} label={props.label} dropdown={props.dropdown} /> : <NavbarLink href={props.href} label={props.label} badgeLabel={typeof props.badgeLabel !== 'undefined' ? props.badgeLabel : ''} badgeClassName={props.badgeClassName || ''} target={props.target} />}</li>;
};

export default NavbarLinks;
