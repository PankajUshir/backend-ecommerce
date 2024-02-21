const DataTypes = require('sequelize')
const sequelize = require('../config/sequelize')
const User = require('./User')

const Order = sequelize.define(
  'Order',
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM('pending', 'shipped', 'delivered'),
      allowNull: false,
      defaultValue: 'pending',
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'email',
      },
    },
  },
  { tableName: 'order', timestamps: false },
)

Order.belongsTo(User, { foreignKey: 'email' })

Order.beforeCreate(async (order) => {
  order.order_date = new Date()
})

module.exports = Order
