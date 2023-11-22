'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketProduct extends Model {
    static associate(models) {}
  }
  BasketProduct.init(
    {
      productId: DataTypes.INTEGER,
      basketId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BasketProduct',
    }
  );
  return BasketProduct;
};
