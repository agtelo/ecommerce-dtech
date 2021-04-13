'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        rol.hasmany(models.user, {
        as: "users"
      }),
    }
  };
  rol.init({
    rolName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rol',
  });
  return rol;
};