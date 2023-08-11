const express = require('express');

const pathSetter = require('../utils/path');
const router = express.Router();
const productsController = require(pathSetter('controllers/products'));


router.get('/products', productsController.getAddProduct)
router.post('/list', productsController.postAddProducts);

router.use('/list', productsController.useAddProducts)

module.exports = router;