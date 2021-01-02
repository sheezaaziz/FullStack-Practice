/*
comments app overview:
GET /comments - list all comments
POST /comments - create new comment
GET /comments/:id - get one comment (@ id)
PATCH /comments/:id - update one comment
DELETE /comments/:id - delete one comment
*/

const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')


app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
app.use(methodOverride('_method')) // for overriding the post method to patch, delete, put etc.
app.use(express.static(path.join(__dirname, 'assets')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mock data bc dk how to connect to a db yet lols.
let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol'
  },
  {
    id: uuid(),
    username: 'Skyler',
    comment: 'this isn\'t that funny.'
  },
  {
    id: uuid(),
    username: 'l8rh8rs',
    comment: 'this is the funniest thing ive ever seen. *dab*'
  },
  {
    id: uuid(),
    username: 'ilikecoffee',
    comment: 'pls delete your acct, l8rh8rs.'
  },
];

// R - Read
// GET /comments - list all comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
})

// C - Create
// POST /comments - create new comment
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments'); // this defaults as a 'get' request.
})

// R - Read
// GET /comments/:id - get one comment (@ id)
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/expand', { id, comment });
})

// U - Update
// PATCH /comments/:id - update one comment
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const originalComment = comments.find(c => c.id === id);
  originalComment.comment = newCommentText;
  res.redirect('/comments');
})

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment });
})

// D - Delete
// DELETE /comments/:id - delete one comment
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id); // bc we want to create a new array copy bc it is good practice to not mutate the og array.
  res.redirect('/comments');
})

app.listen(3000, () => {
  console.log('listening to port 3000.');
})
