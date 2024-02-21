const { orderItemService } = require('../services')

const OrderItemController = {
  getAllOrderItems: async (req, res, next) => {
    try {
      const allOrderItems = await orderItemService.getAllOrderItems()
      if (!allOrderItems) {
        return res.status(404).json({ message: 'No order items found' })
      }
      return res.status(201).json(allOrderItems)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  getByOrderItemsId: async (req, res, next) => {
    try {
      const id = req.params.id
      const orderItemById = await orderItemService.getOrderItemById(id)
      if (!orderItemById) {
        return res.status(404).json({ message: 'No order item found' })
      }
      return res.status(201).json(orderItemById)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  createOrderItem: async (req, res, next) => {
    try {
      const orderItemData = req.body

      const orderItem = await orderItemService.getOrderItemById(
        orderItemData.orderItem_id,
      )

      if (orderItem) {
        return res.status(400).json({ message: 'OrderItem is already exist' })
      }

      const newOrderItem = await orderItemService.createOrderItem(orderItemData)
      return res.status(201).json({ message: 'OrderItem Created Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  updateOrderItem: async (req, res, next) => {
    try {
      const updatedOrderItemData = req.body
      const orderItem = await orderItemService.getOrderItemById(
        updatedOrderItemData.orderItem_id,
      )

      if (!orderItem) {
        return res.status(400).json({ message: 'OrderItem not existed' })
      }

      const updatedOrderItem = await orderItemService.updateOrderItem(
        updatedOrderItemData,
      )
      return res.status(201).json({ message: 'OrderItem Updated Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  deleteOrderItem: async (req, res, next) => {
    try {
      const id = req.params.id
      const orderItem = await orderItemService.getOrderItemById(id)

      if (!orderItem) {
        return res.status(400).json({ message: 'OrderItem Not Found' })
      }
      await orderItemService.deleteOrderItem(orderItem)
      return res.status(201).json({ message: 'OrderItem deleted successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },
}

module.exports = OrderItemController
