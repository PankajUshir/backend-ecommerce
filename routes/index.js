const express = require('express')
const router = express.Router()
const authRoutes = require('./authRoute')
const { authenticateToken } = require('../middlewares/authMiddleware')
const userRoutes = require('./UserRoutes')
const productRoutes = require('./ProductRoutes')
const orderRoutes = require('./OrderRoute')
const orderItemRoutes = require('./OrderItemRoute')

router.use('/auth', authenticateToken)
router.use('/auth/users', userRoutes)
router.use('/auth/products', productRoutes)
router.use('/auth/orders', orderRoutes)
router.use('/auth/orderitems', orderItemRoutes)

router.use('/', authRoutes)

module.exports = router
