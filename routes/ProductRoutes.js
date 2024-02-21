const express = require('express')
const router = express.Router()
const { productController } = require('../controllers')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getByProductId)
router.post('/', productController.createProduct)
router.put('/', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
