const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDBDemo', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall', 'Winter']
  }
})

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//   { name: 'Strawberry', price: 2.99, season: 'Spring'},
//   { name: 'Mangos', price: 3.49, season: 'Summer'},
//   { name: 'Watermelon', price: 5.99, season: 'Summer' },
// ])

const makeFarm = async () => {
  const farm = new Farm({name: 'Full Belly Farms', city: 'Toronto, CA'});
  const melon = await Product.findOne({ name: 'Watermelon' });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
}

// makeFarm();

const addProduct = async() => {
  const farm = await Farm.findOne({ name: 'Full Belly Farms' });
  const melon = await Product.findOne({ name: 'Watermelon' });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
}

// addProduct();

Farm.findOne({ name: 'Full Belly Farms' })
  .populate('products')
  .then(farm => console.log(farm))
