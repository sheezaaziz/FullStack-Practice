const mongoose = require('mongoose');
const path = require('path');

const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } =  require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelpcamp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

const randomElement = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      // can not use randomElement bc city must match state.
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${randomElement(descriptors)}, ${randomElement(places)}`,
    });
    await camp.save();
  }
}

seedDB().then(() => {
  mongoose.connection.close();
});
