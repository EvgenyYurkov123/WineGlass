const router = require('express').Router();

const { Product } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    const countProduct = await Product.count();
    console.log('->>>', countProduct);
    res.json(products);
  } catch (error) {
    console.log('Не могу получить продукты из БД', error);
  }
});

module.exports = router;
