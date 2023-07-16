const express = require('express');

const router = express.Router();
const routeDir = require('./../utils/path');
const path = require('path');



router.get('/products',(req,res,next) => {
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    res.sendFile(path.join(routeDir,'views','add-product.html'))
})

router.post('/list',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..', 'views','shop.html'))
})

module.exports = router;