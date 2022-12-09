import React from 'react';
import styles from './Header.module.scss';
import mealsImg from '../../assets/restaurant.jpg';
import HeaderCartBtn from '../HeaderCartBtn/HeaderCartBtn';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </>
  );
}

export default Header;
