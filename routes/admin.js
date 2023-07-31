const express = require('express');

const router = express.Router();
const routeDir = require('./../utils/path');
const path = require('path');
const store = require(path.join(routeDir , '/utils/store'));


router.get('/products',(req,res,next) => {
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    // res.sendFile(path.join(routeDir,'views','add-product.html'))
    res.render('add-product');
})
router.post('/list',(req,res,next) => {
    console.log({store})
    store.setProduct({title:req.body.product})
    console.log({store})

    next();
});

router.use('/list', (req,res) => res.render('shop',{products:store.products}))


module.exports = router;