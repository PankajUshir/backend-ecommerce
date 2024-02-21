const express = require('express')
const router = express.Router()
const { orderItemController } = require('../controllers')

router.get('/', orderItemController.getAllOrderItems)
router.get('/:id', orderItemController.getByOrderItemsId)
router.post('/', orderItemController.createOrderItem)
router.put('/', orderItemController.updateOrderItem)
router.delete('/:id', orderItemController.deleteOrderItem)

module.exports = router
