const { userService } = require('../services')
const bcrypt = require('bcrypt')

const UserController = {
  getAllUsers: async (req, res, next) => {
    try {
      const allUsers = await userService.getAllUsers()
      if (!allUsers) {
        return res.status(404).json({ message: 'No users found' })
      }
      res.status(201).json(allUsers)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const email = req.params.id
      const userById = await userService.getUserById(email)
      if (!userById) {
        return res.status(404).json({ message: 'No userById found' })
      }
      res.status(201).json(userById)
    } catch {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  // admin can create user
  createUser: async (req, res, next) => {
    try {
      const userData = req.body
      if (!userData.email || !userData.password)
        return res
          .status(400)
          .json({ error: 'email and password are required' })

      const userById = await userService.getUserById(userData.email)

      if (userById) {
        return res.status(400).json({ message: 'User is already exist' })
      }

      const newUser = await userService.createUser(userData)
      return res.status(201).json({ message: 'User Created Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const updatedUserData = req.body
      const user = await userService.getUserById(updatedUserData.email)

      if (!user) {
        return res.status(400).json({ message: 'User not existed' })
      }

      if (user.password !== updatedUserData.password) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10,
        )
      }
      const updatedUser = await userService.updateUser(updatedUserData)
      return res.status(201).json({ message: 'User Updated Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const email = req.params.id
      console.log(email)
      const user = await userService.getUserById(email)

      if (!user) {
        return res.status(400).json({ message: 'User Not Found' })
      }
      await userService.deleteUser(user)
      return res.status(201).json({ message: 'User deleted successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },
}

module.exports = UserController
