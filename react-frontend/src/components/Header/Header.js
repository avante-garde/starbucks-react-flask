import React from 'react';
import styles from './Header.module.css';

const Header = () => {

  return (
    <div className={styles.header}>
      <span className={styles.headerLinks}>
        <img className={styles.logo} alt="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" />
      </span>
      <span className={styles.headerLinks}>
        MENU
      </span>
      <span className={styles.headerLinks}>
        REWARDS
      </span>
      <span className={styles.headerLinks}>
        GIFT CARDS
      </span>
    </div>
  );
};

export default Header;