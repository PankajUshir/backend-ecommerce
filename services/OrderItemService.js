const { orderItemModel } = require('../models')

const OrderService = {
  getAllOrderItems: async () => {
    return await orderItemModel.findAll()
  },

  getOrderItemById: async (id) => {
    return await orderItemModel.findByPk(id)
  },

  createOrderItem: async (orderitem) => {
    return await orderItemModel.create(orderitem)
  },

  updateOrderItem: async (orderitem) => {
    return await orderItemModel.update(orderitem)
  },

  deleteOrderItem: async (orderitem) => {
    return await orderitem.destroy()
  },
}

module.exports = OrderService
