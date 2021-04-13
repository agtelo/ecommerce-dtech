'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.hasmany(models.product, {
        foreignKey: "product_id",
        as: "products"
      }),
      order.belongsTo(models.user, {
        foreignKey: "user_id",
        as: "users"
      }),
    }
  };
  order.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    orderAmount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};