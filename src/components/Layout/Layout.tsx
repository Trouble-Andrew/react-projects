import React from 'react';
import MainHeader from './MainHeader';

interface LayoutProps extends React.ComponentPropsWithoutRef<'div'> {}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
