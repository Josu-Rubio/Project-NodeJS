'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  sell: Boolean,
  price: Number,
  photo: String,
  tags: [String],
  message: mongoose.Schema.Types.Mixed
});

productSchema.statics.list = function (filter, sort, skip, limit, fields) {
    const query = Product.find(filter); 
    query.sort(sort);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    return query.exec();
}

const Product = mongoose.model('Product', productSchema);

module.exports = Product;