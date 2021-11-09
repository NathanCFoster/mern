const Product = require("../models/product");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(e => res.json(e))
        .catch(e => res.json({ error: e}));
}

module.exports.findProduct = (req, res)  => {
    Product.findById(req.params._id)
        .then(e => res.json({ product: e}))
        .catch(e => res.json({error: e}));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(e => res.json({ product: e}))
        .catch(e => res.json({error: e}));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
        .then(e => res.json(e))
        .catch(e => res.json({error: e}));
}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({ _id: req.params._id}, req.body, { new: true, runValidators: true })
        .then(e => res.json(e))
        .catch(e => res.json({error:e}));
}