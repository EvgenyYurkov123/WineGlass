'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate({ Product, User }) {
      this.belongsToMany(Product, {
        through: 'FavouriteProducts',
        foreignKey: 'favouriteId',
      });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Favourite.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favourite',
    }
  );
  return Favourite;
};
