import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Favorites.module.css';
import { fetchFavouriteProducts } from '../../redux/actions';

export default function Favorites(): JSX.Element {
  const dispatch = useDispatch();
  const favouriteItems = useSelector((state) => state.basket.products);
  console.log(favouriteItems);

  useEffect(() => {
    dispatch(fetchFavouriteProducts());
  }, [dispatch]);

  return (
    <div className={styles.FavoriteFlag}>
      <h2>Избранное</h2>
      

      <div>
        <ul className={styles.FavoriteUl}>
          {favouriteItems.map((property) => (
            <li key={property.id}>
              <ProductCard {...property} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
