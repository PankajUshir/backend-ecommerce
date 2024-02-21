const { productService } = require('../services')

const ProductController = {
  getAllProducts: async (req, res, next) => {
    try {
      const allProducts = await productService.getAllProducts()

      if (!allProducts) {
        return res.status(404).json({ message: 'No products found' })
      }
      return res.status(201).json(allProducts)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  getByProductId: async (req, res, next) => {
    try {
      const id = req.params.id
      const product = await productService.getProductById(id)
      if (!product) {
        return res.status(404).json({ message: 'No product found' })
      }
      return res.status(201).json(product)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  createProduct: async (req, res, next) => {
    try {
      const productData = req.body

      const product = await productService.getProductById(
        productData.product_id,
      )

      if (product) {
        return res.status(400).json({ message: 'Product is already exist' })
      }

      const newProduct = await productService.createProduct(productData)
      return res.status(201).json({ message: 'Product Created Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  updateProduct: async (req, res, next) => {
    try {
      const updatedProductData = req.body

      const product = await productService.getProductById(
        updatedProductData.product_id,
      )

      if (!product) {
        return res.status(400).json({ message: 'Product not existed' })
      }

      const updatedProduct = await productService.updateProduct(
        updatedProductData,
      )
      return res.status(201).json({ message: 'Product Updated Successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      const id = req.params.id
      const product = await productService.getProductById(id)

      if (!product) {
        return res.status(400).json({ message: 'Product Not Found' })
      }
      await productService.deleteProduct(product)
      return res.status(201).json({ message: 'Product deleted successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  },
}

module.exports = ProductController
