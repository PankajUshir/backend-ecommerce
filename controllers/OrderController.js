const { orderService } = require('../services')

const OrderController = {
  getAllOrders: async (req, res, next) => {
    try {
      const allOrders = await orderService.getAllOrders()
      if (!allOrders) {
        return res.status(404).json({ message: 'No orders found' })
      }
      return res.status(201).json(allOrders)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  getByOrderId: async (req, res, next) => {
    try {
      const id = req.params.id
      const orderById = await orderService.orderById(id)
      if (!orderById) {
        return res.status(404).json({ message: 'No order found' })
      }
      return res.status(201).json(orderById)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  createOrder: async (req, res, next) => {
    try {
      const orderData = req.body

      const order = await orderService.getOrderById(orderData.order_id)

      if (order) {
        return res.status(400).json({ message: 'Order is already exist' })
      }

      const newOrder = await orderService.createOrder(orderData)
      return res.status(201).json({ message: 'Order Created Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  updateOrder: async (req, res, next) => {
    try {
      const updatedOrderData = req.body

      const order = await orderService.getOrderById(updatedOrderData.order_id)

      if (!order) {
        return res.status(400).json({ message: 'Order not existed' })
      }

      const updatedOrder = await orderService.updateOrder(updatedOrderData)
      return res.status(201).json({ message: 'Order Updated Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  deleteOrder: async (req, res, next) => {
    try {
      const id = req.params.id
      const order = await orderService.getOrderById(id)

      if (!order) {
        return res.status(400).json({ message: 'Order Not Found' })
      }
      await orderService.deleteOrder(order)
      return res.status(201).json({ message: 'Order deleted successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },
}

module.exports = OrderController
