import React, { useEffect } from 'react';
import { Box, Text, VStack, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBasketProducts,
  removeFromBasket,
  incrementItemInBasket,
  decrementItemInBasket,
} from '../../redux/actions';
import styles from './Basket.module.css';
import BasketItem from '../../components/BasketItem/BasketItem';
import { RootState } from '../../types/types';

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: RootState) => state.basket.products);
  const loading = useSelector((state: RootState) => state.basket.loading);
  const error = useSelector((state: RootState) => state.basket.error);


  useEffect(() => {
    dispatch(fetchBasketProducts());
  }, [dispatch]);

  const handleRemoveItem = (productId) => {
    dispatch(removeFromBasket(productId));
  };

  const handleIncrementItem = (productId) => {
    dispatch(incrementItemInBasket(productId));
  };

  const handleDecrementItem = (productId) => {
    dispatch(decrementItemInBasket(productId));
  };

  return (
    <div className={styles.BasketFlag}>
      <div className={styles.DivBasket} >
        <Text fontSize="xl" fontWeight="bold">
          Ваша корзина
        </Text>

        <VStack p={4} spacing={8} style={{display: 'flex', alignItems: 'start'}}>
          {basketItems.length === 0 ? (
            <Text>Ваша корзина пуста.</Text>
          ) : (
            basketItems.map((item) => (
              <BasketItem 
                key={item.id}
                product={item}
                onIncrement={() => handleIncrementItem(item.id)}
                onDecrement={() => handleDecrementItem(item.id)}
                onRemove={() => handleRemoveItem(item.id)}
                />
            ))
          )}
       
            <div style={{ width:'736px', display: 'flex', justifyContent: 'center' }}>

            <Button colorScheme="blue" style={{ marginTop: '20px'}}>Оформить заказ</Button>
            </div>
          
        </VStack>
      </div>
    </div>
  );
};

export default Basket;

