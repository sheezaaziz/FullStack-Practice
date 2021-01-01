const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log(req);
//   res.send('<h1>This is a header</h1>');
// });

app.get('/', (req, res) => {
  res.send('This is the homepage.');
});

app.post('/', (req, res) => {
  res.send('This is a POST request to the homepage.')
});

app.get('/r/:subreddit', (req, res) => {
  // subreddit = req.params['subreddit'];
  // or destructure
  const { subreddit } = req.params;
  res.send(`This is the ${subreddit} subreddit.`);
});

app.get('/search', (req, res) => {
  //?q=req.query
  const { q } = req.query;
  if (!q) {
    res.send('Nothing found if nothing searched');
  }
  res.send(`Search results for: ${q}`);
});

app.get('/cats', (req, res) => {
  res.send('Meow.');
});

app.get('/dogs', (req, res) => {
  res.send('Woof.');
});

app.get('*', (req, res) => {
  res.send('This page does not exist on this app.');
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
