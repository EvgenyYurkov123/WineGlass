import React, { useContext, useState } from 'react';
import axios from 'axios';
import styles from './ProductCard.module.css';
import { ContextAll } from '../../context/context';
import { IProduct } from '../../types/types';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Button,
  Flex,
  Box,
  Circle,
  VStack,
  Link,
} from '@chakra-ui/react';

export default function ProductCard(props: IProduct) {
  const [isFilled, setIsFilled] = useState(false);
  const { id, image, name, article, rate, tags, price, balance } = props;

  const handleClick = async (id: number) => {
    setIsFilled(!isFilled);
    const response = await axios.post(
      'http://localhost:3002/favourite',
      { productId: id },
      {
        withCredentials: true,
      }
    );
    return response.data;
  };

  const handlesClick = async (id: number) => {
    const response = await axios.post(
      'http://localhost:3002/basket',
      { productId: id },
      {
        withCredentials: true,
      }
    );
    return response.data;
  };

  const { products, setProducts } = useContext(ContextAll);
  const addHandler = (id: number) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, isFavourite: true };
        }
        return product;
      });
    });
  };
  return (
    <Card maxW="18rem" maxH="48rem">
      <CardHeader>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Flex alignItems="center">
              {balance > 0 ? (
                <>
                  <Circle size="0.6rem" bg="green"></Circle>
                  <Text ml={2} fontSize="xs">
                    В наличии
                  </Text>
                </>
              ) : (
                <>
                  <Circle size="0.6rem" bg="red"></Circle>
                  <Text ml={2} fontSize="xs">
                    Нет в наличии
                  </Text>
                </>
              )}
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center" direction="row">
              <Image src="https://cdn-icons-png.flaticon.com/16/1828/1828884.png"></Image>
              <Text ml={1} fontSize="md" as="b">
                {rate}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody className={styles.CardBodu} style={{ paddingBottom: '10px' }}>
        <Flex direction="column" alignItems="center">
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            height="12rem"
            maxW="6rem"
            borderRadius="lg"
          />
          <VStack align="start" mt={4}>
            <Text fontSize="xs">Артикул: {article}</Text>
            <Text fontSize="14px" textAlign={'left'}>
              {name}
            </Text>
            <Flex gap={1}>
              {tags.map((tag, index, arr) =>
                arr.length - 1 !== index ? (
                  <Link
                    color="teal.500"
                    fontSize="xs"
                    key={`uniq` + { tag }}
                    href="#"
                  >
                    {tag}
                  </Link>
                ) : (
                  <Text color="black" fontSize="xs" key={`uniq` + { tag }}>
                    {tag}
                  </Text>
                )
              )}
            </Flex>
          </VStack>
        </Flex>
      </CardBody>
      <CardFooter className={styles.CardFuter}>
        <Flex
          className={styles.DivPrice}
          justifyContent={'space-between'}
          gap={6}
        >
          <Text className={styles.Price} color="btn.100" fontSize="20px" mb={3}>
            {price} руб.
          </Text>
          <div className={styles.DivBasFav}>
            <Button
              variant="solid"
              bg="#C72A38"
              color="white"
              _hover={{ bg: '#68191f' }}
              onClick={() => handlesClick(id)}
            >
              В корзину
            </Button>
            <div className={styles.FavBut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill={isFilled ? '#FF0000' : 'none'}
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => handleClick(id)}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </Flex>
      </CardFooter>
    </Card>
  );
}
