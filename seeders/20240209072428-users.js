const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const encryptedPassword = await bcrypt.hash('user', 10)

    const customUsers = [
      {
        email: 'admin@email.com',
        password: encryptedPassword,
        name: 'john doe',
        role: 'ADMIN',
      },

      {
        email: 'bob@email.com',
        password: encryptedPassword,
        name: 'bob smith',
        role: 'USER',
      },
      {
        email: 'alice@email.com',
        password: encryptedPassword,
        name: 'alice jones',
        role: 'USER',
      },
      {
        email: 'charlie@email.com',
        password: encryptedPassword,
        name: 'charlie brown',
        role: 'SELLER',
      },
      {
        email: 'jane@example.com',
        password: encryptedPassword,
        name: 'jane doe',
        role: 'SELLER',
      },
    ]

    // Insert custom users into the 'users' table
    await queryInterface.bulkInsert('users', customUsers, {})
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all data from the 'users' table
    await queryInterface.bulkDelete('users', null, {})
  },
}
