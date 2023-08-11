const pathSetter = require('../utils/path');
const log = require(pathSetter('console'));

const Product = require(pathSetter('models/product'));

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
    // res.sendFile(path.join(routeDir,'views','add-product.html'))
    res.render('add-product', { title: "ADD Products", activeRoute: "addProducts" });
}

exports.postAddProducts = (req, res, next) => {
    const newProduct = new Product(req.body.product);
    newProduct.save();
    next();
}

exports.useAddProducts = (req, res) => res.render('shop', { title: "Shop", activeRoute: 'shop', products: Product.getAll(), productsExist: Product.getAll().length });


exports.getShop = (req, res, next) => {
    log(req.url);
    res.status(401);
    res.statusMessage = 'hi'
    res.redirect('/admin/products');
}