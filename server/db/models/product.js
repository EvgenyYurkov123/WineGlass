'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Basket, Favourite }) {
      this.belongsToMany(Basket, {
        through: 'BasketProducts',
        foreignKey: 'productId',
      });
      this.belongsToMany(Favourite, {
        through: 'FavouriteProducts',
        foreignKey: 'productId',
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      image: DataTypes.STRING,
      article: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      tags: DataTypes.ARRAY(DataTypes.STRING),
      brand: DataTypes.STRING,
      country: DataTypes.STRING,
      region: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sugar: DataTypes.STRING,
      color: DataTypes.STRING,
      type: DataTypes.STRING,
      class: DataTypes.STRING,
      age: DataTypes.STRING,
      popular: DataTypes.STRING,
      volume: DataTypes.INTEGER,
      strong: DataTypes.STRING,
      count: DataTypes.INTEGER,
      balance: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
