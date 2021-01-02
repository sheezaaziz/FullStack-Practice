const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home.ejs');
})

app.get('/cats', (req, res) => {
  let allCats = ['abe', 'blue', 'toby', 'pumpkin'];
  res.render('cats.ejs', { cats: allCats });
})

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('rand.ejs', { rand: num });
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit.ejs', { subredditc });
})

app.listen(3000, () => {
  console.log('listening to port 3000.');
})
