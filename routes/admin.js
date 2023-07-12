const express = require('express');

const router = express.Router();



router.get('/products',(req,res,next) => {
    res.send('<body><form action="/admin/list" method="POST"> <input name="product" type="text" /><button type="submit">send</button></form></body>')
})

router.post('/list',(req,res,next) => {
    res.send(`<h1>${req.body['product']}</h1>`)
})

module.exports = router;