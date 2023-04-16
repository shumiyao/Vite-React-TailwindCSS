import { ReactElement } from 'react';

import { siteConfig } from 'contentlayer/generated';

function PageFooter(): ReactElement {
  return (
    <>
      <footer aria-label='Site Footer' className='mt-auto text-cuckoo-yellow bg-cuckoo-brown pt-3'>
        <div className=' px-4 pt-8 pb-5 mx-auto '>
          <div className='container px-3 mx-auto flex flex-wrap flex-col md:flex-row '>
            <div className='flex flex-wrap text-left lg:text-left w-full'>
              <div className=' md:w-8/12 px-4 mb-8 lg:mb-0'>
                <h4 className=' self-center font-semibold text-6xl  xl:text-6xl font-symphonyRegular text-cuckoo-yellow'>CuckooParrot Design Agency</h4>
                <div className='mt-12 space-y-5'>
                  <p>Nossos serviços incluem web design, branding, design gráfico e muito mais.</p>
                </div>
              </div>
              <div className='w-full md:w-4/12 lg:px-4'>
                <div className='flex flex-wrap items-top lg:mb-6'>
                  <div className='w-full  px-4 ml-auto'>
                    <span className='block mb-6 uppercase text-blueGray-500 text-2xl border-solid border-b-2 border-cuckoo-brown font-semibold '>Contactos</span>
                    <ul className='list-unstyled '>
                      <li>
                        <a className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-5 text-md ' href='mailto:info@cuckooparrot.com'>
                          <i className=' fa-solid fa-envelope mr-2'></i> info@cuckooparrot.com
                        </a>
                      </li>
                      <li>
                        <a className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-5 text-md ' href='tel:969743803'>
                          <i className=' fa-solid fa-phone mr-2'></i> (+351) 969743 803
                        </a>
                      </li>
                      <li className=''>
                        <a href={'https://twitter.com/' + siteConfig.twitterAccount} target='_blank' rel='noreferrer' className='font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none ' type='button'>
                          <i className='fab fa-twitter'></i>
                        </a>
                        <a href={'https://facebook.com/' + siteConfig.facebookAccount} target='_blank' rel='noreferrer' className='font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none ' type='button'>
                          <i className='fab fa-facebook-square'></i>
                        </a>
                        <a href={'https://instagram.com/' + siteConfig.instagramAccount} target='_blank' rel='noreferrer' className='font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none ' type='button'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className='my-6 border-blueGray-300' />
            <div className='w-full'>
              <div className='w-full px-4 mx-auto text-center justify-self-end'>
                <div className='mt-10  text-blueGray-500 font-semibold py-1 text-center mx-auto'>
                  Copyright © <span id='get-current-year'>2023</span> CuckooParrot Design Agency
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PageFooter;
