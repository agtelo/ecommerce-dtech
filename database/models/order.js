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
      Order.belongsTo(models.User,{
        foreignKey: "userId",
        as: "user",
        allowNull: false
      })
      Order.belongsTo(models.Product,{
        foreignKey: "productId",
        as: "products",
        allowNull: false
      })
    }
  };
  Order.init({
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    orderAmount: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};