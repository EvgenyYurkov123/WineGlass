'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Product }) {
      this.belongsToMany(Product, {
        through: 'BasketProducts',
        foreignKey: 'basketId',
      });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Basket.init(
    {
      userId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Basket',
    }
  );
  return Basket;
};
