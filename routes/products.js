const  express = require('express')

const router = express.Router()
const productController = require('../controllers/productController')


router.get("/products", productController.getProducts)


router.post('/products', productController.postProduct)


router.get('/products/:id',productController.getProductById)

router.put("/products", productController.editProduct)

router.delete('/products', productController.deleteProduct)

module.exports = router