import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { CloseIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';

const BasketItem = ({ product, onRemove, onIncrement, onDecrement }) => (
  <Flex alignItems="center" p={4}>
    <Image src={product.image} alt={product.name} w={16} h={16} />
    <Box ml={4}>
      <Text fontSize="lg" fontWeight="bold">
        {product.name}
      </Text>
      <Text fontSize="md">{product.price} руб.</Text>
    </Box>
    <Spacer />
    <Stack direction="row" alignItems="center">
      <IconButton
        aria-label="Уменьшить количество"
        icon={<MinusIcon />}
        onClick={() => onDecrement(product)}
        size="sm"
      />
      <Text fontSize="lg">{product.quantity}</Text>
      <IconButton
        aria-label="Увеличить количество"
        icon={<AddIcon />}
        onClick={() => onIncrement(product.id)}
        size="sm"
      />
    </Stack>
    <Spacer />
    <Text fontSize="lg">{product.quantity * product.price} руб.</Text>
    <IconButton
      aria-label="Удалить товар из корзины"
      icon={<CloseIcon />}
      onClick={() => onRemove(product)}
      size="sm"
    />
  </Flex>
);

export default BasketItem;
