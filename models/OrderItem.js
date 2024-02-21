const DataTypes = require('sequelize')
const sequelize = require('../config/sequelize')
const Product = require('./Product')
const Order = require('./Order')

const OrderItem = sequelize.define(
  'OrderItem',
  {
    order_item_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: 'order_id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'product_id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { tableName: 'order_item', timestamps: false },
)

OrderItem.belongsTo(Product, { foreignKey: 'product_id' })
OrderItem.belongsTo(Order, { foreignKey: 'order_id' })

Order.hasMany(OrderItem, { foreignKey: 'order_id' })

module.exports = OrderItem
