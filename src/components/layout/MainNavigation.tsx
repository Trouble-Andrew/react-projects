import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Great Quotes</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) => (navData.isActive ? styles.active : '')}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={(navData) => (navData.isActive ? styles.active : '')}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
