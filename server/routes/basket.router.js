const router = require('express').Router();

const { Product, Basket, BasketProduct } = require('../db/models');

router
  .get('/', async (req, res) => {
    const userId = req.session.user.id;

    try {
      const userBasketProducts = await Basket.findAll({
        where: { userId },
        include: {
          model: Product,
        },
      });
      const userBasketProductsNoMeta = userBasketProducts.map((el) =>
        el.get({ plain: true })
      );
      if (!userBasketProducts) {
        res.json([]);
      }

      const productsInBasket = userBasketProductsNoMeta.map((basketItem) =>
        basketItem.Products.map((product) => ({
          id: product.id,
          image: product.image,
          name: product.name,
          quantity: basketItem.quantity,
          total: basketItem.total,
          price: product.price,
        }))
      );

      console.log(productsInBasket.flat());

      res.json(productsInBasket.flat());
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: 'Ошибка при получении продуктов из корзины' });
    }
  })
  .post('/', async (req, res) => {
    const userId = req.session.user.id;
    const { productId } = req.body;

    try {
      let basket = await Basket.findOne({ where: { userId } });

      if (!basket) {
        basket = await Basket.create({ userId });
      }

      await BasketProduct.create({ basketId: basket.id, productId });

      res.status(201).json({ message: 'Продукт успешно добавлен в корзину' });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Ошибка при добавлении продукта в корзину' });
    }
  })
  .put('/increment/:id', async (req, res) => {
    const { id } = req.params;
    const userId = req.session.user.id;

    try {
      const basket = await Basket.findOne({ where: { userId } });
      console.log('basket->>>>>', basket);
      if (basket) {
        const basketProduct = await BasketProduct.findOne({
          where: { basketId: basket.id, productId: id },
        });
        console.log('basketProduct->>>>>', basketProduct);

        if (basketProduct) {
          // Увеличьте количество продукта в корзине
          basket.quantity += 1;
          await basket.save();
          // Обновите общую стоимость корзины
          const product = await Product.findByPk(id);
          if (product) {
            basket.total += product.price;
            await basket.save();
          }
          console.log('product->>>>>', product);
          console.log('basket->>>>>', basket);

          res
            .status(200)
            .json({ message: 'Количество продукта в корзине увеличено' });
        } else {
          res.status(404).json({ error: 'Продукт не найден в корзине' });
        }
      } else {
        res.status(404).json({ error: 'Корзина не найдена для пользователя' });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Ошибка при инкременте продукта в корзине' });
    }
  })
  .put('/decrement/:id', async (req, res) => {
    const { id } = req.params;
    const userId = req.session.user.id;

    try {
      const basket = await Basket.findOne({ where: { userId } });

      if (basket) {
        const basketProduct = await BasketProduct.findOne({
          where: { basketId: basket.id, productId: id },
        });

        if (basketProduct) {
          if (basket.quantity > 1) basket.quantity -= 1;

          await basket.save();
          const product = await Product.findByPk(id);
          if (product) {
            basket.total -= product.price;
            await basket.save();
          }

          res
            .status(200)
            .json({ message: 'Количество продукта в корзине увеличено' });
        } else {
          res.status(404).json({ error: 'Продукт не найден в корзине' });
        }
      } else {
        res.status(404).json({ error: 'Корзина не найдена для пользователя' });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Ошибка при инкременте продукта в корзине' });
    }
  })
  .delete('/:id', async (req, res) => {
    const { id } = req.params;
    const userId = req.session.user.id;

    try {
      const basket = await Basket.findOne({ where: { userId } });

      if (basket) {
        const basketProduct = await BasketProduct.findOne({
          where: { basketId: basket.id, productId: id },
        });

        if (basketProduct) {
          // Удалить продукт из корзины
          await basketProduct.destroy();
          // Пересчитать общую стоимость корзины
          const product = await Product.findByPk(id);
          if (product) {
            basket.total -= product.price;
            await basket.save();
          }

          res
            .status(200)
            .json({ message: 'Продукт успешно удален из корзины' });
        } else {
          res.status(404).json({ error: 'Продукт не найден в корзине' });
        }
      } else {
        res.status(404).json({ error: 'Корзина не найдена для пользователя' });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Ошибка при удалении продукта из корзины' });
    }
  });

// .put('/increment/:id', async (req, res) => {
//   const { id } = req.params;
//   const userId = req.session.user.id;
//   try {
//     const basket = await Basket.findAll({ where: { userId } });
//     console.log(basket);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: 'Ошибка при добавлении продукта в корзину' });
//   }
// });

module.exports = router;
