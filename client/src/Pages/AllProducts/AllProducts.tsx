import React from 'react';
import styles from './AllProducts.module.css';
import { ListProducts } from '../../components/ListProducts/ListProducts';

export default function AllProducts() {
  return (
    <div className={styles.AllProductsFlag}>
      <div className={styles.DivAllProductsHead}>
        <h2>Вся продукция нашего магазина</h2>
      </div>
      <div className={styles.DivAllProducts}>
        <ListProducts />
      </div>
    </div>
  );
}
