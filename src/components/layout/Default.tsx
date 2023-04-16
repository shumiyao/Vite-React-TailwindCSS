import { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import NavbarHeader from '@/components/common/HeaderNav';
import Footer from '@/components/common/Footer';
// import menuItems from '../../lib/navmenu-items';

interface Props {
  className?: string;
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div className={'font-marcellus text-gray-600 flex flex-col min-h-screen overflow-hidden ' + props.className || ''}>
      <header>
        <NavbarHeader menuItems={menuItems || []} />
      </header>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
