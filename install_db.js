'use strict';

const db = require('./lib/connectMongoose');
const Product = require('./models/product.js');
const Tag = require('./models/tag.js');

db.once('open', async () => {
  try {
    await initProducts();
    await initTags();
    db.close();
  } catch (err) {
    console.log(`An error ocurred on ${err}`);
    process.exit(1);
  }
});

async function initProducts() {
  await Product.deleteMany();
  await Product.insertMany([
    {  name: 'Motorbike',  sell: true,  price: 900.00,  photo: 'motorbike.jpg',  tags: ['lifestyle', 'motor']},
    {  name: 'Airpods',  sell: false,  price: 100.00,  photo: 'airpods.jpg',  tags: ['mobile']},
    {  name: 'Kite',  sell: true,  price: 50.00,  photo: 'kite.jpg',  tags: ['lifestyle']},
    {  name: 'Drawing pad',  sell: false,  price: 75.00,  photo: 'drawpad.jpg',  tags: ['work']},
    {  name: 'Phone "White Brand"',  sell: true,  price: 250.00,  photo: 'phone.jpg',  tags: ['work', 'mobile']},
  ]);
}

async function initTags() {
  await Tag.deleteMany();
  await Tag.insertMany([
    { tag: 'lifestyle' },
    { tag: 'work' },
    { tag: 'motor' },
    { tag: 'mobile' }
  ]);
}
