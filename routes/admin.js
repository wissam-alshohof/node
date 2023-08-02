const express = require('express');

const router = express.Router();
const routeDir = require('./../utils/path');
const path = require('path');
const log = require('../console');
const store = require(path.join(routeDir , '/utils/store'));


router.get('/products',(req,res,next) => {
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    // res.sendFile(path.join(routeDir,'views','add-product.html'))
    res.render('add-product',{title: "ADD Products"});
})
router.post('/list',(req,res,next) => {
    console.log({store})
    store.setProduct({title:req.body.product})
    console.log({store})

    next();
});

router.use('/list', (req,res) => res.render('shop',{title:"Shop", products:store.products, productsExist:store.products.length}))

module.exports = router;