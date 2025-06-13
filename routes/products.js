var express = require('express');
var router = express.Router();

/* GET home page. */

var products = require('../products.json');
const productsList = Object.entries(products).map(([productId, product]) => (
  ({ id: productId, name: product.name, manufacturor: product.manufacturer, price: product.price, stock: product.stock, option: product.options ? product.options.join(', ') : 'N/A' })
));
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(productsList.length);
  console.log(productsList[id]);
  var product = productsList[id];
    res.send(productsList[id]? productsList[id]: "Product not found");
});
module.exports = router;