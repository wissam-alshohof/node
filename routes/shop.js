const express = require('express');

const shopRouter = express.Router();

const productsController = require('../controllers/products')


//? using  { use } don't make full match for the route but get DOES
shopRouter.get('/', productsController.getShop);

module.exports = shopRouter;