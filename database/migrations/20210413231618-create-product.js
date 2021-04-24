'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      item1: {
        type: Sequelize.STRING
      },
      item2: {
        type: Sequelize.STRING
      },
      item3: {
        type: Sequelize.STRING
      },
      item4: {
        type: Sequelize.STRING
      },
      item5: {
        type: Sequelize.STRING
      },
      item6: {
        type: Sequelize.STRING
      },
      item7: {
        type: Sequelize.STRING
      },
      item8: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categories',
          },
          key: 'id'
          
          
        },
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};