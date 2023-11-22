'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavouriteProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FavouriteProduct.init({
    productId: DataTypes.INTEGER,
    favouriteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavouriteProduct',
  });
  return FavouriteProduct;
};