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
// to parse body in req.body
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', { campgrounds });
})

app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new');
})

app.post('/campgrounds', async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`campgrounds/${campground._id}`);
})

app.get('/campgrounds/:id', async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render('campgrounds/show', { campground });
})

app.listen(3000, () => {
  console.log('Serving on port 3000');
})
