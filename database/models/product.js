'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
        
        
      })
      Product.hasMany(models.Order,{
        as:"orders",
        allowNull: false
      })
    }
  };
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
  },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    item1: DataTypes.STRING,
    item2: DataTypes.STRING,
    item3: DataTypes.STRING,
    item4: DataTypes.STRING,
    item5: DataTypes.STRING,
    item6: DataTypes.STRING,
    item7: DataTypes.STRING,
    item8: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
    
  });
  return Product;
};