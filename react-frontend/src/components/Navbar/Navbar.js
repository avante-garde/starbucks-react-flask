import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <span className={styles.navbarDisplace} />
        <span style={{textDecoration: 'underline', textUnderlineOffset: '10px'}} className={styles.navbarLinks}>
          All products
        </span>
        <span className={styles.navbarLinks}>
          Featured
        </span>
        <span className={styles.navbarLinks}>
          Previous Orders
        </span>
        <span className={styles.navbarLinks}>
          Favorite Products
        </span>
      </div>
    </div>
  );
};

export default Navbar;