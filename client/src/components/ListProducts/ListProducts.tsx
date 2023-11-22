import { useContext, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ListProducts.module.css';
import { ContextAll } from '../../context/context';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchAllProducts } from '../../redux/thunkActions';

export const ListProducts = (): JSX.Element => {
  const { query, setQuery } = useContext(ContextAll);
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.basket.products);

  useEffect(() => {
    void dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className={styles.list__products}>
      {products
        .filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.article.toLowerCase().includes(query.toLowerCase())
        )
        .map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            article={product.article}
            rate={product.rate}
            tags={product.tags}
            price={product.price}
            balance={product.balance} isFavourite={false}          />
        ))}
    </div>
  );
};
