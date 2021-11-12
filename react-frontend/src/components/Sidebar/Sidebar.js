import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <h2 className={styles.menuSuperCategory}>
          Drinks
        </h2>
        <div className={styles.menuCategory}>
          Hot Coffees
        </div>
        <div className={styles.menuCategory}>
          Hot Teas
        </div>
        <div className={styles.menuCategory}>
          Hot Drinks
        </div>
        <div className={styles.menuCategory}>
          Frappucino&reg; Blended Beverages
        </div>
        <div className={styles.menuCategory}>
          Cold Coffees
        </div>
        <div className={styles.menuCategory}>
          Iced Teas
        </div>
        <div className={styles.menuCategory}>
          Cold Drinks
        </div>
        <h2 className={styles.menuSuperCategory}>
          Food
        </h2>
        <div className={styles.menuCategory}>
          Hot Breakfast
        </div>
        <div className={styles.menuCategory}>
          Bakery
        </div>
        <div className={styles.menuCategory}>
          Lunch
        </div>
        <div className={styles.menuCategory}>
          Snacks & Sweets
        </div>
        <div className={styles.menuCategory}>
          Oatmeal & Yogurt
        </div>
        <h2 className={styles.menuSuperCategory}>
          At Home Coffee
        </h2>
        <div className={styles.menuCategory}>
          Whole Bean
        </div>
        <div className={styles.menuCategory}>
          VIA&reg; Instant
        </div>
        <h2 className={styles.menuSuperCategory}>
          Merchandise
        </h2>
        <div className={styles.menuCategory}>
          Cold Cups
        </div>
        <div className={styles.menuCategory}>
          Tumblers
        </div>
        <div className={styles.menuCategory}>
          Water Bottles
        </div>
        <div className={styles.menuCategory}>
          Other
        </div>
      </div>
    </div>
  );
};

export default Sidebar;