const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/moviesApp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("oh no, an error!: ", err);
  })

// Schemas are just concepts on the js side of things
  const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
  });

// Models are for the db
const Movie = mongoose.model('Movie', movieSchema);
// We can now make instances of the Movie class
// const tenet = new Movie({title: 'tenet', year: 2020, score: 10, rating: 'PG-13'});
// Need to save it to the db
// tenet.save(); // Returns a promise.

Movie.insertMany([
  { title: 'Crazy Rich Asians', year: 2018, score: 9, rating: 'PG-13'},
  { title: 'Tenet', year: 2020, score: 10, rating: 'PG-13'},
  { title: 'The Imitation Game', year: 2014, score: 8, rating: 'PG-13'}
])
  .then(data => {
    console.log("it worked!!");
    console.log(data);
  })
