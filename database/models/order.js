'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasmany(models.Product, {
        foreignKey: "product_id",
        as: "products"
      }),
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "users"
      })
    }
  };
  Order.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    orderAmount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};