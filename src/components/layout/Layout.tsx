import React from 'react';
import styles from './Layout.module.scss';
import MainNavigation from './MainNavigation';

interface LayoutProps extends React.ComponentPropsWithoutRef<'div'> {}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Layout;
