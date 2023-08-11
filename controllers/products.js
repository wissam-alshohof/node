const pathSetter = require('../utils/path');
const store = require(pathSetter('utils/store'));
const log = require(pathSetter('console'))

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    // res.sendFile(path.join(routeDir,'views','add-product.html'))
    res.render('add-product', { title: "ADD Products", activeRoute: "addProducts" });
}

exports.postAddProducts = (req, res, next) => {
    store.setProduct({ title: req.body.product })
    next();
}

exports.useAddProducts = (req, res) => res.render('shop', { title: "Shop",activeRoute: 'shop', products: store.products, productsExist: store.products.length });


exports.getShop = (req, res, next) => {
    log(req.url);
    res.status(401);
    res.statusMessage = 'hi'
    res.redirect('/admin/products');
}