const controller = require("../controllers/products.controller");

module.exports = app => {
    app.get('/api/products/:_id', controller.findProduct);
    app.get('/api/products', controller.findAllProducts);
    app.post('/api/products/create', controller.createProduct);
    app.put('/api/products/update/:_id', controller.updateProduct)
    app.delete('/api/products/delete/:_id', controller.deleteProduct);
}

