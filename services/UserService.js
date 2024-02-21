const { userModel } = require('../models')

const UserService = {
  getAllUsers: async () => {
    return await userModel.findAll()
  },

  getUserById: async (email) => {
    return await userModel.findByPk(email)
  },

  createUser: async (user) => {
    return await userModel.create(user)
  },

  updateUser: async (user) => {
    const { email } = user

    return await userModel.update(user, {
      where: { email },
    })
  },

  deleteUser: async (user) => {
    return await user.destroy()
  },
}

module.exports = UserService
