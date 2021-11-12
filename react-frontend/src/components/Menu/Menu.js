import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '../../store';
import styles from './Menu.module.css';

const Menu = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector(state => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.menuContainer}>
      {menuItems.length > 0 && (
        <div className={styles.menu}>
          <h1>Menu</h1>
          <div className={styles.menuHeader}>
            <h2>Drinks</h2>
          </div>
          <div className={styles.menuDrinks}>
            <div className={styles.menuDrinkItems}>
              <img className={styles.img} alt="Hot Coffees" src={menuItems.filter((item) => item.category === 'Hot Coffees')[0].imageUrl} />
              <span>Hot Coffees</span>
            </div>
            <div className={styles.menuDrinkItems}>
              <img className={styles.img} alt="Hot Teas" src={menuItems.filter((item) => item.category === 'Hot Teas')[0].imageUrl} />
              <span>Hot Teas</span>
            </div>
            <div className={styles.menuDrinkItems}>
              <img className={styles.img} alt="Hot Drinks" src={menuItems.filter((item) => item.category === 'Hot Drinks')[0].imageUrl} />
              <span>Hot Drinks</span>
            </div>
            <div className={styles.menuDrinkItems}>
              <img className={styles.img} alt="Frappucino Blended Beverages" src={menuItems.filter((item) => item.category === 'Frappucino Blended Beverages')[0].imageUrl} />
              <span>Frappucino&reg; Blended Beverages</span>
            </div>
            <div className={styles.menuDrinkItems}>
              <img className={styles.img} alt="Cold Coffees" src={menuItems.filter((item) => item.category === 'Cold Coffees')[0].imageUrl} />
              <span>Cold Coffees</span>
            </div>
            <div className={styles.menuDrinkItems}>
              <img className={styles.img} alt="Iced Teas" src={menuItems.filter((item) => item.category === 'Iced Teas')[0].imageUrl} />
              <span>Iced Teas</span>
            </div>
            <div className={styles.menuDrinkItems}>
              <img className={styles.img} alt="Cold Drinks" src={menuItems.filter((item) => item.category === 'Cold Drinks')[0].imageUrl} />
              <span>Cold Drinks</span>
            </div>
          </div>
          <div className={styles.menuHeader}>
            <h2>Food</h2>
          </div>
          <div className={styles.menuFood}>
            <div className={styles.menuFoodItems}>
              <img className={styles.img} alt="Hot Breakfast" src={menuItems.filter((item) => item.category === 'Hot Breakfast')[0].imageUrl} />
              <span>Hot Breakfast</span>
            </div>
            <div className={styles.menuFoodItems}>
              <img className={styles.img} alt="Bakery" src={menuItems.filter((item) => item.category === 'Bakery')[0].imageUrl} />
              <span>Bakery</span>
            </div>
            <div className={styles.menuFoodItems}>
              <img className={styles.img} alt="Lunch" src={menuItems.filter((item) => item.category === 'Lunch')[0].imageUrl} />
              <span>Lunch</span>
            </div>
            <div className={styles.menuFoodItems}>
              <img className={styles.img} alt="Snacks & Sweets" src={menuItems.filter((item) => item.category === 'Snacks & Sweets')[0].imageUrl} />
              <span>Snacks & Sweets</span>
            </div>
            <div className={styles.menuFoodItems}>
              <img className={styles.img} alt="Oatmeal & Yogurt" src={menuItems.filter((item) => item.category === 'Oatmeal & Yogurt')[0].imageUrl} />
              <span>Oatmeal & Yogurt</span>
            </div>
          </div>
          <div className={styles.menuHeader}>
            <h2>At Home Coffee</h2>
          </div>
          <div className={styles.menuAtHomeCoffee}>
            <div className={styles.menuAtHomeCoffeeItems}>
              <img className={styles.img} alt="Whole Bean" src={menuItems.filter((item) => item.category === 'Whole Bean')[0].imageUrl} />
              <span>Whole Bean</span>
            </div>
            <div className={styles.menuAtHomeCoffeeItems}>
              <img className={styles.img} alt="VIA Instant" src={menuItems.filter((item) => item.category === 'VIA Instant')[0].imageUrl} />
              <span>VIA&reg; Instant</span>
            </div>
          </div>
          <div className={styles.menuHeader}>
            <h2>Merchandise</h2>
          </div>
          <div className={styles.menuMerchandise}>
            <div className={styles.menuMerchandiseItems}>
              <img className={styles.img} alt="Cold Cups" src={menuItems.filter((item) => item.category === 'Cold Cups')[0].imageUrl} />
              <span>Cold Cups</span>
            </div>
            <div className={styles.menuMerchandiseItems}>
              <img className={styles.img} alt="Tumblers" src={menuItems.filter((item) => item.category === 'Tumblers')[0].imageUrl} />
              <span>Tumblers</span>
            </div><div className={styles.menuMerchandiseItems}>
              <img className={styles.img} alt="Water Bottles" src={menuItems.filter((item) => item.category === 'Water Bottles')[0].imageUrl} />
              <span>Water Bottles</span>
            </div><div className={styles.menuMerchandiseItems}>
              <img className={styles.img} alt="Other" src={menuItems.filter((item) => item.category === 'Other')[0].imageUrl} />
              <span>Other</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;