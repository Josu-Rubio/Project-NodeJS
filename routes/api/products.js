const express = require('express');
const router = express.Router();
const Product = require('./../../models/product');

router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    const limit = parseInt(req.query.limit || 100);
    const skip = parseInt(req.query.skip);
    const sort = req.query.sort;
    const fields = req.query.fields;
    if (req.query.name !== undefined) {
      filter.name = new RegExp('^' + req.query.name, 'i');
    }
    if (req.query.sell !== undefined) {
      filter.sell = req.query.sell;
    }
    if (req.query.from !== undefined || req.query.to !== undefined) { // Still unable to get back the prices
      if (req.query.from !== undefined && req.query.to) {             // Name, Sell & tag, working.
        filter.price = {$gte: parseInt(req.query.from),  $lte: parseInt(req.query.to)};
      }
    }
    if (req.query.tag !== undefined) {
      filter.tags = req.query.tag;
    }

    const docs = await Product.list(filter, sort, skip, limit, fields);
    res.json(docs);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const productData = req.body;
    const product = new Product(productData);
    const productSaved = await product.save();
    res.status(201).json({ result: productSaved });
  } catch (err) {
    new err();
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id;
    await Product.deleteOne({ _id: _id });
    res.json();
  } catch (err) {
    next(err);
  }
})

module.exports = router;
