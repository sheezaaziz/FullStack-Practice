const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground');

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.send('hello from yelpcamp!');
})

app.get('/makecampground', async (req, res) => {
  const camp = new Campground({title: 'my backyard lol', description: 'cheap camping'});
  await camp.save()
  res.send(camp);
})

app.listen(3000, () => {
  console.log('Serving on port 3000');
})
