const { orderModel } = require('../models')

const OrderService = {
  getAllOrders: async () => {
    return await orderModel.findAll()
  },

  getOrderById: async (id) => {
    return await orderModel.findByPk(id)
  },

  createOrder: async (order) => {
    return await orderModel.create(order)
  },

  updateOrder: async (order) => {
    const { order_id } = order
    return await orderModel.update(order, { where: { order_id } })
  },

  deleteOrder: async (order) => {
    return await order.destroy()
  },
}

module.exports = OrderService
