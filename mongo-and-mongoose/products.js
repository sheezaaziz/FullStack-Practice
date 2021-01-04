const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    min: [0, 'price must be positive! smhsmh']
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: [String],
    default: ['cycling']
  },
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inPerson: {
      type: Number,
      default: 0
    }
  }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Mountain Bike', price: 24.50, categories: ['Cycling', 'Adult Bikes']});
bike.save()
  .then(data => {
    console.log("NEW BIKE");
    // console.log(data);
  })
  .catch(err => {
    console.log("NO NEW BIKE:()");
    // console.log(err);
  })

// { new: true } gets fcn to return the updated data instead of old.
// by default findOneAndUpdate does NOT run validators, so we need to add this in { runValidators: true }
Product.findOneAndUpdate({name: 'Mountain Bike'}, {price: 19.99}, {new: true, runValidators: true})
  .then(data => {
    console.log("BIKE UPDATED");
    // console.log(data);
  })
  .catch(err => {
    console.log("BIKE DIDNT UPDATE:(");
    // console.log(err);
  })






const shirtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  price: {
    type: Number,
    min: [0, 'price must be positive! smhsmh']
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: [String],
    default: ['unisex']
  },
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inPerson: {
      type: Number,
      default: 0
    }
  },
  size: {
    enum: ['XS', 'S', 'M', 'L', 'XL'],
  }
});

shirtSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
}

shirtSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
}

shirtSchema.statics.fireSale = function () {
  return this.updateMany({}, {onSale: true, price: 0});
}

const Shirt = mongoose.model('Shirt', shirtSchema);

const findShirt = async() => {
  const foundProduct = await Shirt.findOne({name: 'Plain white T'});
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  await foundProduct.addCategory('homegrown');
  console.log(foundProduct);
}

// const shirt = new Shirt({name: 'Plain white T', price: 20, size: 'S'});
// shirt.save()
//   .then(data => {
//     console.log("NEW SHIRT!");
//     // console.log(data);
//   })
//   .catch(err => {
//     console.log("NO NEW SHIRT:( BC ERROR");
//     // console.log(err);
//   })

findShirt();
Shirt.fireSale().then(res => console.log(res));
