const { productModel } = require('../models')

const productService = {
  getAllProducts: async () => {
    return await productModel.findAll()
  },

  getProductById: async (id) => {
    return await productModel.findByPk(id)
  },

  createProduct: async (product) => {
    return await productModel.create(product)
  },

  updateProduct: async (product) => {
    const { product_id } = product
    return await productModel.update(product, { where: { product_id } })
  },

  deleteProduct: async (product) => {
    return await product.destroy()
  },
}

module.exports = productService
