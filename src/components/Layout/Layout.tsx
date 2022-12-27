import React from 'react';

import MainNavigation from './MainNavigation';

interface LayoutProps extends React.ComponentPropsWithoutRef<'div'> {}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
