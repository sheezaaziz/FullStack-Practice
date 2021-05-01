const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

// const p = new Product({name: 'Best Mangos', price: 5.99, category: 'fruit'});
// p.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("oh no, an error!: ", err);
//   })

const seedProducts = [
  {
    name: 'Mangos',
    price: 4.99,
    category: 'fruit'
  },
  {
    name: 'Apples',
    price: 3.99,
    category: 'fruit'
  },
  {
    name: 'Brocolli',
    price: 3.99,
    category: 'vegetable'
  },
  {
    name: 'Organic Celery',
    price: 1.50,
    category: 'vegetable'
  },
  {
    name: 'Chocolate Milk',
    price: 2.75,
    category: 'dairy'
  }
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })
