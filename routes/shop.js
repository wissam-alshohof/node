const express = require('express');

const shopRouter = express.Router();

const log = require('./../console');

//? using  { use } don't make full match for the route but get DOES
shopRouter.get('/', (req, res, next) => {
    log(req.url);
    res.status(401);
    res.statusMessage = 'hi'
    res.redirect('/admin/products');
});

module.exports = shopRouter;