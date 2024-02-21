const express = require('express')
const router = express.Router()
const { orderController } = require('../controllers')

router.get('/', orderController.getAllOrders)
router.get('/:id', orderController.getByOrderId)
router.post('/', orderController.createOrder)
router.put('/', orderController.updateOrder)
router.delete('/:id', orderController.deleteOrder)

module.exports = router
