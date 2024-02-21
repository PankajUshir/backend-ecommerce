'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM('ADMIN', 'USER', 'SELLER'),
        allowNull: false,
        defaultValue: 'USER',
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  },
}
