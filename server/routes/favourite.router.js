const router = require('express').Router();

const { Product, Favourite, FavouriteProduct } = require('../db/models');

router
  .get('/', async (req, res) => {
    const userId = req.session.user.id;

    try {
      const userFavouriteProducts = await Favourite.findAll({
        where: { userId },
        include: {
          model: Product,
        },
      });
      const userFavouriteProductsNoMeta = userFavouriteProducts.map((el) =>
        el.get({ plain: true })
      );
      if (!userFavouriteProducts) {
        res.json([]);
      }

      const productsInFavourite = userFavouriteProductsNoMeta.map(
        (favouriteItem) =>
          favouriteItem.Products.map((product) => ({
            id: product.id,
            image: product.image,
            name: product.name,
            article: product.article,
            rate: product.rate,
            tags: product.tags,
            price: product.price,
            balance: product.balance,
          }))
      );

      console.log(productsInFavourite.flat());

      res.json(productsInFavourite.flat());
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: 'Ошибка при получении продуктов из избранных' });
    }
  })
  .post('/', async (req, res) => {
    const userId = req.session.user.id;
    const { productId } = req.body;

    try {
      let favourite = await Favourite.findOne({ where: { userId } });

      if (!favourite) {
        favourite = await Favourite.create({ userId });
      }

      await FavouriteProduct.create({ favouriteId: favourite.id, productId });

      res.status(201).json({ message: 'Продукт успешно добавлен в избранное' });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Ошибка при добавлении продукта в избранное' });
    }
  });

module.exports = router;
